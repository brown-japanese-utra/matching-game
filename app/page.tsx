"use client";

import { Center, Grid, Title, Image, Button, Space, Radio, Group } from "@mantine/core";
import TextCard from "./components/FlashCard/TextCard";
import { Phrase, phraseList } from "./components/Phrases";
import { useEffect, useMemo, useState } from "react";
import ImageCard from "./components/FlashCard/ImageCard";

const difficultyMap: { [key: string]: number } = {
  easy: 6,
  medium: 8,
  hard: 10,
  endless: 10,
};

// Helper function for generating random numbers
const randomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function for setting the list of phrases that were selected
// It should run this function once upon initial loadup of the page
// TODO: change for loop based on number of cards someone wants
function choosePhrases(cardsAmt: number): Phrase[] {
  let phraseListClone = [...phraseList];
  let selectedPhrases: Phrase[] = [];
  for (let i = 0; i < cardsAmt; i += 2) {
    let ind = randomNumberInRange(0, phraseListClone.length - 1);
    let startOfPair = ind % 2 === 0 ? ind : ind - 1;
    selectedPhrases.push(phraseListClone[startOfPair]);
    selectedPhrases.push(phraseListClone[startOfPair + 1]);
    phraseListClone.splice(startOfPair, 2);
  }
  return selectedPhrases;
}

// Function to replace the chosen phrase in a list with a random new one not currently in the list
function replacePhrase(phrases: Phrase[], phraseId: number): Phrase[] {
  console.log(phraseId);
  let newId = phrases[0].id;
  let ind = 0;
  // As long as we keep finding something in our list, reroll
  while (phrases.findIndex((phrase) => phrase.id == newId) != -1) {
    ind = randomNumberInRange(0, phraseList.length - 1);
    console.log(ind);
    newId = phraseList[ind].id;
  }
  let replaceInd = phrases.findIndex((phrase) => phrase.id == phraseId);
  phrases[replaceInd] = phraseList[ind];
  return phrases;
}

/* Randomize array not-in-place using Durstenfeld shuffle algorithm */
function shuffleArray<T>(array: T[]) {
  let ret = array.slice(0);
  for (var i = ret.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = ret[i];
    ret[i] = ret[j];
    ret[j] = temp;
  }
  return ret;
}

export default function HomePage() {
  // Checking if we're on the client or server
  const [isClient, setIsClient] = useState(false);

  // Scoring, streak, and lives for Endless mode
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);

  // Use state to track the chosen phrases, since we reshuffle them
  // Also track difficulty
  const [difficulty, setDifficulty] = useState("easy");
  const [chosenPhrases, setChosenPhrases] = useState(choosePhrases(difficultyMap[difficulty]));

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Used for card colors. If there's a correct match, let the game know
  const [isCorrectMatch, setIsCorrectMatch] = useState<boolean | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  // Helper function to properly calculate the card color
  function calcColor(selectorState: number, cardId: number): string {
    if (selectorState === cardId) {
      if (isEvaluating && isCorrectMatch) {
        return "green";
      } else if (isEvaluating && !isCorrectMatch) {
        return "red";
      } else {
        return "blue";
      }
    } else {
      return "white";
    }
  }

  // Shuffle the phrases so pairs don't appear next to each other
  // Use memo to ensure this only happens when our array actually changes
  const shuffledForTxt = useMemo(() => {
    console.log("Running memo shuffle txt");
    return shuffleArray(chosenPhrases);
  }, [JSON.stringify(chosenPhrases)]);

  // Map each element in the chosen phrases array to a text card
  // Use state to keep track of which button is selected
  const [selectedTxtButton, setTxtButton] = useState(-1);
  // Use state to keep track of which audio is playing
  const textCards = shuffledForTxt.map((phrase) => {
    let cardText: string = isClient ? phrase.object + phrase.particle + phrase.kanji : "ローディング中";
    return (
      <TextCard
        key={phrase.id}
        text={cardText}
        onSelect={() => (isEvaluating ? "" : setTxtButton(phrase.id))}
        color={calcColor(selectedTxtButton, phrase.id)}
        audio={phrase.audioURL}
      ></TextCard>
    );
  });

  const halfwayText = Math.ceil(textCards.length / 2);
  const textCardsLeft = textCards.slice(0, halfwayText);
  const textCardsRight = textCards.slice(halfwayText, textCards.length);

  // Shuffle the phrases so images get picked in a different order than the text
  // Use memo to ensure this only happens when our array actually changes
  const shuffledForImg = useMemo(() => {
    return shuffleArray(chosenPhrases);
  }, [JSON.stringify(chosenPhrases)]);

  // Map each element in the chosen phrases array to an image card
  // Use state to keep track of which button is selected
  const [selectedImgButton, setImgButton] = useState(-1);
  const imgCards = shuffledForImg.map((phrase) => {
    return (
      <ImageCard
        key={phrase.id}
        image={isClient ? phrase.imageURL : undefined}
        onSelect={() => (isEvaluating ? "" : setImgButton(phrase.id))}
        color={calcColor(selectedImgButton, phrase.id)}
      ></ImageCard>
    );
  });

  // Matching function
  const checkMatch = () => {
    if (lives == 0) return;
    setIsEvaluating(true);

    // If the selected buttons are the same id, then it's a match
    if (selectedTxtButton == selectedImgButton) {
      setIsCorrectMatch(true);
      setStreak(streak + 1);
      setScore(score + 1000 * (streak + 1));
      if (difficulty === "endless") setChosenPhrases(replacePhrase(chosenPhrases, selectedTxtButton));
      console.log(chosenPhrases);
    } else {
      setIsCorrectMatch(false);
      setStreak(0);
      setLives(lives - 1);
    }
    setTimeout(() => {
      setTxtButton(-1);
      setImgButton(-1);
      setIsEvaluating(false);
    }, 3000);
  };

  const halfwayImg = Math.ceil(textCards.length / 2);
  const imgCardsLeft = imgCards.slice(0, halfwayImg);
  const imgCardsRight = imgCards.slice(halfwayImg, imgCards.length);

  let titleBar;

  if (difficulty === "endless") {
    titleBar = (
      <Title order={1}>
        日本語のマッチングゲーム {"Score: " + score} {" Streak: " + streak} {"Lives: " + lives}
      </Title>
    );
    if (lives === 0) {
      titleBar = (
        <Title order={1}>
          日本語のマッチングゲーム {"Score: " + score} {" Streak: " + streak}{" "}
          {"Lives: " + lives + ' Nice job! Press "Generate" to go again!'}
        </Title>
      );
    }
  } else {
    titleBar = (
      <Title order={1}>
        日本語のマッチングゲーム {"Score: " + score} {" Streak: " + streak}
      </Title>
    );
  }

  return (
    <>
      <Center>{titleBar}</Center>
      <Grid>
        <Grid.Col span={4}>
          <Center>
            <Radio.Group name="difficulty" label="Select your difficulty!" value={difficulty} onChange={setDifficulty}>
              <Group mt="xs">
                <Radio value="easy" label="Easy" />
                <Radio value="medium" label="Medium" />
                <Radio value="hard" label="Hard" />
                <Radio value="endless" label="Endless" />
              </Group>
            </Radio.Group>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Button
              onClick={() => checkMatch()}
              disabled={selectedImgButton == -1 || selectedTxtButton == -1 || isEvaluating}
            >
              Evaluate
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Button
              onClick={() => {
                setChosenPhrases(choosePhrases(difficultyMap[difficulty]));
                setScore(0);
                setStreak(0);
                setLives(3);
              }}
            >
              Generate
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
      <Grid>
        {/* Words Half */}
        <Grid.Col span={6}>
          <Center>
            <Title order={1}>動詞</Title>
          </Center>
          {/* Grid which changes how many columns there are depending on
          screen size */}
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>{textCardsLeft}</Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>{textCardsRight}</Grid.Col>
          </Grid>
        </Grid.Col>
        {/* Pictures Half */}
        <Grid.Col span={6}>
          <Center>
            <Title order={1}>写真</Title>
          </Center>
          {/* Grid which changes how many columns there are depending on
          screen size */}
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>{imgCardsLeft}</Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>{imgCardsRight}</Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  );
}

"use client";

import { Center, Grid, Title } from "@mantine/core";
import FlashCard from "./components/FlashCard/FlashCard";
import { Phrase, phraseList } from "./components/Phrases";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { text } from "stream/consumers";

export default function HomePage() {
  // Helper function for generating random numbers
  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function for setting the list of phrases that were selected
  // It should run this function upon render of the page
  // TODO: ensure no duplicates can happen
  // TODO: change for loop based on number of cards someone wants
  const chooseCards = useMemo(() => {
    let selectedPhrases: Phrase[] = [];
    for (let i = 0; i < 2; i++) {
      let randNum = randomNumberInRange(0, phraseList.length - 1);
      selectedPhrases.push(phraseList[randNum]);
    }
    return selectedPhrases;
  }, []);

  // State for the chosen phrases
  const [chosenPhrases] = useState<Phrase[]>(chooseCards);

  // Map each element in the chosen phrases array to an element
  const textCards = chosenPhrases.map((phrase, idx) => (
    <FlashCard key={idx} isImage={false} text={phrase.object + phrase.particle + phrase.kanji}></FlashCard>
  ));
  const halfway = Math.floor(textCards.length / 2);
  const textCardsLeft = textCards.slice(0, halfway);
  const textCardsRight = textCards.slice(halfway, textCards.length);
  return (
    <>
      <Center>
        <Title order={1}>日本語のマッチングゲーム</Title>
      </Center>
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
        </Grid.Col>
        {/* 
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col> */}
      </Grid>
    </>
  );
}

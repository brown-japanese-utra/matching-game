"use client";

import { Center, Grid, Title } from "@mantine/core";
import FlashCard from "./components/FlashCard/FlashCard";
import { Phrase, phraseList } from "./components/Phrases";
import { use, useCallback, useEffect, useMemo, useState } from "react";

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
  const cards = chosenPhrases.map((phrase, idx) => (
    <FlashCard
      key={idx}
      isImage={false}
      text={phrase.object + phrase.particle + phrase.kanji}
    ></FlashCard>
  ));

  return (
    <>
      <Center>
        <Title order={1}>日本語のマッチングゲーム</Title>
      </Center>
      <Grid>
        <Grid.Col span={6}>
          <Center>
            <Title order={1}>動詞</Title>
          </Center>
          {cards}
        </Grid.Col>

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

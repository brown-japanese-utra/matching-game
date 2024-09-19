"use client";

import { Center, Grid, Text, Title } from "@mantine/core";

export default function HomePage() {
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
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <Title order={1}>写真</Title>
          </Center>
        </Grid.Col>

        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
        <Grid.Col span={{ base: 6, sm: 3 }}>teehee</Grid.Col>
      </Grid>
    </>
  );
}

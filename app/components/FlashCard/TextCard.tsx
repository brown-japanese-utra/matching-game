import { Space, Paper, Text, Button, Grid, GridCol, ActionIcon } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
interface FlashCardProps {
  color: string;
  text?: string;
  audio?: string;
  onSelect: any;
}

export default function TextCard(props: FlashCardProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  useEffect(() => setAudio(new Audio(props.audio)), []);
  function playAudio() {
    audio?.play();
  }
  return (
    <Grid gutter={0}>
      <GridCol span={11}>
        <Button fullWidth color={props.color} onClick={props.onSelect} variant="outline">
          <Paper p="sm" shadow="sm" radius="md">
            <Text ta="center" size="lg">
              {props.text}
            </Text>
          </Paper>
          <Space h="sm" />
        </Button>
      </GridCol>
      <GridCol span={1}>
        <ActionIcon variant="filled" onClick={playAudio}>
          <IconPlayerPlayFilled />
        </ActionIcon>
      </GridCol>
    </Grid>
  );
}

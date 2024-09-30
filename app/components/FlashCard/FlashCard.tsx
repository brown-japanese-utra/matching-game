import { Space, Paper, Text, Button, Image } from "@mantine/core";
import { useState } from "react";

interface FlashCardProps {
  isImage: boolean;
  selected: boolean;
  text?: string;
  onSelect: any;
}

export default function FlashCard(props: FlashCardProps) {
  const color = props.selected ? "blue" : "white";

  return (
    <Button fullWidth color={color} onClick={props.onSelect} variant="outline">
      <Paper p="sm" shadow="sm" radius="md">
        <Text ta="center" size="lg">
          {props.text}
        </Text>
      </Paper>
      <Space h="sm" />
    </Button>
  );
}

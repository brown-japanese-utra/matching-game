import { Space, Paper, Text, Button, Image } from "@mantine/core";
import { useState } from "react";

interface FlashCardProps {
  isImage: boolean;
  text?: string;
}

export default function FlashCard(props: FlashCardProps) {
  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected((s) => !s);
  }

  const color = selected ? "blue" : "white";

  return (
    <Button fullWidth color={color} onClick={toggle} variant="outline">
      <Paper p="sm" shadow="sm" radius="md">
        <Text ta="center" size="lg">
          {props.text}
        </Text>
      </Paper>
      <Space h="sm" />
    </Button>
  );
}

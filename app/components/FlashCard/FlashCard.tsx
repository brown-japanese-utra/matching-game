import { Space, Paper, Text, Card, Image } from "@mantine/core";

interface FlashCardProps {
  isImage: boolean;
  text?: string;
}

export default function FlashCard(props: FlashCardProps) {
  return (
    <>
      <Paper p="sm" shadow="sm" withBorder radius="md">
        <Text ta="center" size="lg">
          {props.text}
        </Text>
      </Paper>
      <Space h="sm" />
    </>
  );
}

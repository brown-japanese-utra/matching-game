import { Space, Paper, Text, Button } from "@mantine/core";

interface FlashCardProps {
  color: string;
  text?: string;
  onSelect: any;
}

export default function TextCard(props: FlashCardProps) {
  return (
    <Button fullWidth color={props.color} onClick={props.onSelect} variant="outline">
      <Paper p="sm" shadow="sm" radius="md">
        <Text ta="center" size="lg">
          {props.text}
        </Text>
      </Paper>
      <Space h="sm" />
    </Button>
  );
}

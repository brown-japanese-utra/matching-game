import { Space, Paper, Text, Button } from "@mantine/core";

interface FlashCardProps {
  selected: boolean;
  text?: string;
  onSelect: any;
}

export default function TextCard(props: FlashCardProps) {
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

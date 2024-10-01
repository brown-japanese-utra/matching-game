import { Space, Paper, Text, Button } from "@mantine/core";

interface FlashCardProps {
  selected: boolean;
  text?: string;
  onSelect: any;
  isCorrectMatch: boolean;
  isIncorrectMatch: boolean;
}

export default function TextCard(props: FlashCardProps) {
  const getColor = () => {
    if (props.isCorrectMatch) return "green";
    if (props.isIncorrectMatch) return "red";
    if (props.selected) return "blue";
    return "white";
  };
  return (
    <Button
      fullWidth
      color={getColor()}
      onClick={props.onSelect}
      variant="outline"
    >
      <Paper p="sm" shadow="sm" radius="md">
        <Text ta="center" size="lg">
          {props.text}
        </Text>
      </Paper>
      <Space h="sm" />
    </Button>
  );
}

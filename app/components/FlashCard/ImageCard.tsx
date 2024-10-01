import { Space, Button, Image, rem } from "@mantine/core";

interface FlashCardProps {
  selected: boolean;
  image?: string;
  onSelect: any;
  isCorrectMatch: boolean;
  isIncorrectMatch: boolean;
}

export default function ImageCard(props: FlashCardProps) {
  const getColor = () => {
    if (props.isCorrectMatch) return "green";
    if (props.isIncorrectMatch) return "red";
    if (props.selected) return "blue";
    return "white";
  };
  return (
    <Button
      h={rem(80)}
      fullWidth
      color={getColor()}
      onClick={props.onSelect}
      variant="outline"
    >
      <Image h={rem(75)} w="auto" src={props.image} alt="image" />
    </Button>
  );
}

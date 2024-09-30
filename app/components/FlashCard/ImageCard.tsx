import { Space, Button, Image, rem } from "@mantine/core";

interface FlashCardProps {
  selected: boolean;
  image?: string;
  onSelect: any;
}

export default function ImageCard(props: FlashCardProps) {
  const color = props.selected ? "blue" : "white";

  return (
    <Button h={rem(80)} fullWidth color={color} onClick={props.onSelect} variant="outline">
      <Image h={rem(75)} w="auto" src={props.image} alt="image" />
    </Button>
  );
}

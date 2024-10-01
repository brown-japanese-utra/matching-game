import { Space, Button, Image, rem } from "@mantine/core";

interface FlashCardProps {
  color: string;
  image?: string;
  onSelect: any;
}

export default function ImageCard(props: FlashCardProps) {
  return (
    <Button h={rem(80)} fullWidth color={props.color} onClick={props.onSelect} variant="outline">
      <Image h={rem(75)} w="auto" src={props.image} alt="image" />
    </Button>
  );
}

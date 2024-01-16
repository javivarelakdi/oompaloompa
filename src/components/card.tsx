import { Flex } from "../components/flex";
import { Box } from "../components/box";
import { Text } from "../components/text";

type CardProps = {
  image: string;
  name: string;
  description: string;
};
export default function Card({ image, name, description }: CardProps) {
  return (
    <Flex columns={{ "@bpSmall": 6, "@bpMedium": 4, "@bpLarge": 3 }}>
      <Box css={{ padding: "$tiny" }}>
        <img src={image} alt={name} style={{ maxWidth: "100%" }} />
        <Box>
          <Text textStyle="body-l">{name}</Text>
        </Box>
        <Box>
          <Text textStyle="body-m">{description}</Text>
        </Box>
      </Box>
    </Flex>
  );
}

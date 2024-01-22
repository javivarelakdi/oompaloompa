import { Flex } from "../components/flex";
import { Box } from "../components/box";
import { Text } from "../components/text";
import { Link } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  description: string;
  id: number;
};
export default function Card({
  image,
  name,
  description,
  id,
}: Readonly<CardProps>) {
  return (
    <Flex columns={{ "@bpSmall": 6, "@bpMedium": 4, "@bpLarge": 3 }}>
      <Box css={{ padding: "$tiny" }}>
        <Link to={`/${id}`}>
          <img src={image} alt={name} style={{ maxWidth: "100%" }} />
        </Link>
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

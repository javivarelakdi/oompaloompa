import { useParams } from "react-router-dom";
import { Worker } from "../redux/WorkerReducer";
import { Flex } from "../components/flex";
import { Link } from "react-router-dom";
import { Box } from "../components/box";
import { Text } from "../components/text";

export type SingleProps = { workerList: Worker[] };
export default function Single({ workerList }: SingleProps) {
  const { id } = useParams();
  const selection = workerList.filter((el) => el.id.toString() === id)[0];
  return (
    <>
      <Box
        css={{
          backgroundColor: "$third",
          padding: "$medium",
          color: "#fff",
        }}
      >
        <Link to="/">
          <Text textStyle="heading-xxs">Oompa Loompa´s Crew</Text>
        </Link>
      </Box>
      <Flex
        justify="between"
        wrap="wrap"
        align="start"
        css={{ padding: "1rem" }}
      >
        <Flex columns={{ "@bpExtraSmall": 7 }}>
          <img
            src={selection.image}
            alt={selection.first_name}
            style={{ maxWidth: "100%" }}
          />
        </Flex>
        <Flex columns={{ "@bpExtraSmall": 5 }}>
          <Box css={{ paddingLeft: "1rem" }}>
            <Box>
              <Text textStyle="body-l">{selection.first_name}</Text>
            </Box>
            <Box>
              <Text textStyle="body-m">Gender: {selection.gender}</Text>
            </Box>
            <Box>
              <Text textStyle="body-m">Profession: {selection.profession}</Text>
            </Box>
            <Box>
              <Text textStyle="body-m">Age: {selection.age}</Text>
            </Box>
            <Box>
              <Text textStyle="body-m">Email: {selection.email}</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

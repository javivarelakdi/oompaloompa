import { Worker } from "../redux/WorkerReducer";
import Card from "../components/card";
import { Flex } from "../components/flex";

export type GalleryProps = { workerList: Worker[] };
export default function Gallery({ workerList }: GalleryProps) {
  return (
    <Flex
      justify="between"
      wrap="wrap"
      css={{ paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      {workerList.map((el: Worker) => (
        <Card
          id={el.id}
          key={el.id}
          image={el.image}
          name={el.first_name}
          description={el.profession}
        />
      ))}
    </Flex>
  );
}

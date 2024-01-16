import { useEffect } from "react";
import Gallery from "./views/gallery";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { fetchWorkers } from "./redux/WorkerReducer";
import { globalCssFunction } from "./stitches.config";
import { Box } from "./components/box";
import { Text } from "./components/text";
import { Flex } from "./components/flex";

function App() {
  globalCssFunction();
  const dispatch: AppDispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.worker.loading);
  const error = useSelector((state: RootState) => state.worker.error);
  const workerList = useSelector((state: RootState) => state.worker.workers);

  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <Box
        css={{
          backgroundColor: "$third",
          padding: "$medium",
        }}
      >
        <Text textStyle="heading-xxs">Oompa Loompa´s Crew</Text>
      </Box>
      <Flex
        justify="center"
        css={{
          marginTop: "$medium",
          marginBottom: "$tiny",
        }}
      >
        <Text textStyle="heading-m">Find your Oompa Loompa</Text>
      </Flex>
      <Flex
        justify="center"
        css={{
          marginTop: "$tiny",
          marginBottom: "$medium",
        }}
      >
        <Text textStyle="heading-xs">There are more than 100k</Text>
      </Flex>
      <Gallery workerList={workerList} />
    </Box>
  );
}

export default App;

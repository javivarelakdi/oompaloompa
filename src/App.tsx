import { useCallback, useEffect, useState } from "react";
import Gallery from "./views/gallery";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { fetchWorkers } from "./redux/WorkerReducer";
import { globalCssFunction } from "./stitches.config";
import { Box } from "./components/box";
import { Text } from "./components/text";
import { Flex } from "./components/flex";
import { Button } from "./components/button";

function App() {
  globalCssFunction();
  const dispatch: AppDispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.worker.loading);
  const error = useSelector((state: RootState) => state.worker.error);
  const workerList = useSelector((state: RootState) => state.worker.workers);
  const [page, setPage] = useState(1);

  const handleFetch = useCallback(
    (pageNum: number) => {
      dispatch(fetchWorkers(pageNum));
    },
    [dispatch]
  );

  useEffect(() => {
    handleFetch(page);
  }, [handleFetch, page]);

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
          color: "#fff",
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
      <Flex
        justify="center"
        css={{
          marginTop: "$tiny",
          marginBottom: "$medium",
        }}
      >
        <Button onClick={() => setPage(page + 1)}>Load more</Button>
      </Flex>
    </Box>
  );
}

export default App;

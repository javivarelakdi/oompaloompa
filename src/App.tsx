import { useCallback, useEffect, useRef, useState } from "react";
import Gallery from "./views/gallery";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { fetchWorkers, filterWorkers } from "./redux/WorkerReducer";
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
  const workerListSelector = useSelector(
    (state: RootState) => state.worker.workers
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFetch = useCallback(
    (pageNum: number) => {
      dispatch(fetchWorkers(pageNum));
      setIsFiltered(false);
    },
    [dispatch]
  );

  const handleSubmitSearch = useCallback(
    (event: any) => {
      event.preventDefault();
      if (searchInputRef.current?.value.length) {
        const filteredList = workerListSelector.filter((worker) => {
          return worker.first_name === searchInputRef.current?.value;
        });
        dispatch(filterWorkers({ filteredList }));
        setIsFiltered(true);
      }
    },
    [workerListSelector, dispatch]
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
        justify="end"
        css={{
          padding: "$medium",
        }}
      >
        <form onSubmit={handleSubmitSearch}>
          <input ref={searchInputRef} type="search" />
        </form>
      </Flex>

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
      <Gallery workerList={workerListSelector} />
      <Flex
        justify="center"
        css={{
          marginTop: "$tiny",
          marginBottom: "$medium",
        }}
      >
        {!isFiltered && (
          <Button onClick={() => setPage(page + 1)}>Load more</Button>
        )}
        {isFiltered && (
          <Button onClick={() => handleFetch(1)}>Clear filter</Button>
        )}
      </Flex>
    </Box>
  );
}

export default App;

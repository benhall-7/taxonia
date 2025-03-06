import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";

import { testRoute, TestSearch } from "src/routes/index/test";
import actions from "src/actions";
import TestMain from "./Test/TestMain";
import { useState } from "react";

export default function Test() {
  // use timestamp to control react-query caching nonsense
  const [testId] = useState(new Date());

  // CONCERN: it's odd that I have to specify the type here.
  // tanstack-router also includes parent component search params,
  // but I have to & the types together to use them
  const search: TestSearch = testRoute.useSearch();

  const taxaParams: Parameters<typeof actions.getObservationsList.action>[0] = {
    rank: "species",
    taxon_id: search.taxon ? [String(search.taxon)] : undefined,
    place_id: search.place ? [search.place] : undefined,
    introduced: search.introduced,
    threatened: search.threatened,
    per_page: String(search.questionCount),
    quality_grade: "research",
    captive: false,
    order_by: "random",
    photos: true,
  };
  const { data: observationsList, isLoading } = useQuery({
    queryKey: [actions.getObservationsList.key, taxaParams, testId],
    queryFn: ({ signal }) =>
      actions.getObservationsList.action(taxaParams, { signal }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <>
      {!observationsList && isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      )}
      {observationsList && <TestMain observations={observationsList} />}
    </>
  );
}

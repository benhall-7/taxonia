import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

import { testRoute, TestSearch } from "src/routes/index/test";
import actions from "src/actions";
import TestMain from "./Test/TestMain";

export default function Test() {
  // CONCERN: it's odd that I have to specify the type here.
  // tanstack-router also includes parent componnet search params,
  // but I have to & the types together to use them
  const search: TestSearch = testRoute.useSearch();

  const taxaParams: Parameters<typeof actions.getObservationsList.action>[0] = {
    taxon_id: search.taxon ? [String(search.taxon)] : undefined,
    place_id: search.place ? [search.place] : undefined,
    introduced: search.introduced,
    threatened: search.threatened,
    per_page: String(search.questionCount),
    quality_grade: "research",
    captive: false,
    order_by: "random",
    photos: true,
    rank: "species",
  };
  const { data: observationsList, isLoading } = useQuery({
    queryKey: [actions.getObservationsList.key, taxaParams],
    queryFn: ({ signal }) =>
      actions.getObservationsList.action(taxaParams, { signal }),
    // refreshing shouldn't retrieve the same test
    staleTime: 0,
  });

  return (
    <Box margin="20px">
      {!observationsList && isLoading && "Loading..."}
      {observationsList && <TestMain observations={observationsList} />}
    </Box>
  );
}

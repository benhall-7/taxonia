import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";

import actions from "src/actions";
import TestMain from "./Test/TestMain";
import { useState } from "react";
import { useSearch } from "@tanstack/react-router";
import {
  TERM_ID_ALIVE_OR_DEAD,
  TERM_VALUE_ID_DEAD,
} from "src/services/inaturalist/consts";

export default function Test() {
  // use timestamp to control react-query caching nonsense
  const [testId] = useState(new Date());

  const search = useSearch({ from: "/test" });

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
    ...(search.excludeDead
      ? {
          term_id_or_unknown: [TERM_ID_ALIVE_OR_DEAD],
          without_term_value_id: [TERM_VALUE_ID_DEAD],
        }
      : undefined),
    // The browser will cache the response for 10 seconds. This
    // prevents me from accidentally overburdening the API and is
    // short enough to prevent refresh-to-retry exploits
    ttl: "10",
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

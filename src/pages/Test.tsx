import { useQuery } from "@tanstack/react-query";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import taxonia from "src/images/taxonia.png";
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
  };
  const { data: observationsList, isLoading } = useQuery({
    queryKey: [actions.getObservationsList.key, taxaParams],
    queryFn: ({ signal }) =>
      actions.getObservationsList.action(taxaParams, { signal }),
    staleTime: Infinity,
  });

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <img src={taxonia} width="24px" />
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "8px" }}
          >
            Test
          </Typography>
        </Toolbar>
      </AppBar>

      <Box margin="20px">
        {!observationsList && isLoading && "Loading..."}
        {observationsList && <TestMain observations={observationsList} />}
      </Box>
    </Box>
  );
}

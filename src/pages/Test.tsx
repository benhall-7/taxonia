import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import actions from "src/actions";

export default function Test() {
  const taxaParams: Parameters<typeof actions.getObservationsList.action>[0] = {
    user_id: ["benhall-7"],
    place_id: [1],
    page: "1",
    per_page: "20",
    native: true,
  };
  const { data: observationsList } = useQuery({
    queryKey: [actions.getObservationsList.key, taxaParams],
    queryFn: ({ signal }) =>
      actions.getObservationsList.action(taxaParams, { signal }),
  });
  useEffect(() => console.log(observationsList));

  return <Box>The Test!</Box>;
}

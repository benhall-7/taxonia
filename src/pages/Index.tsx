import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";
import ObservationsList from "src/pages/Index/ObservationsList";

export function Index() {
  const { key, action } = actions.getObservationsList;
  const params: Parameters<typeof action>[0] = {
    user_id: ["benhall-7"],
    order_by: "id",
    order: "desc",
    page: "1",
    per_page: "30",
    quality_grade: "research",
  };
  const { data, isLoading } = useQuery({
    queryKey: [key, params],
    queryFn: ({ signal }) => action(params, { signal }),
  });

  return (
    <>
      <div>Hello world!</div>
      {!data && isLoading && "Loading..."}
      {data && (
        <div>
          <p>Total observations: {data.total_results}</p>
          <h1>Observations list</h1>
          <ObservationsList observations={data.results} />
        </div>
      )}
    </>
  );
}

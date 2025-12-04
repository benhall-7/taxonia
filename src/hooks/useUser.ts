import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";

export default function useUser() {
  const results = useQuery({
    queryKey: [actions.getAuthMe],
    queryFn: ({ signal }) => actions.getAuthMe.action({ signal }),
  });

  return results;
}

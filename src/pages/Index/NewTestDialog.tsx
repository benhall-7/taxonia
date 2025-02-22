import {
  Autocomplete,
  Button,
  debounce,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { NewTestParams } from "./types";
import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";
import { useLocation } from "wouter";

export default function NewTestDialog({ initialValues }: NewTestDialogProps) {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<NewTestParams | undefined>(
    initialValues
  );
  const [taxaValue, setTaxaValue] = useState(params?.taxon?.name || "");
  const [taxaQuery, setTaxaQuery] = useState("");

  const [placesValue, setPlacesValue] = useState(params?.place?.name || "");
  const [placesQuery, setPlacesQuery] = useState("");

  const [, navigate] = useLocation();
  const handleSubmit = () => {
    navigate("/test", { replace: true, state: params });
  };

  const handleClose = () => setOpen(false);

  const taxaParams: Parameters<
    typeof actions.getTaxaAutocompleteList.action
  >[0] = {
    q: taxaQuery,
    per_page: "10",
    is_active: true,
  };
  const placesParams: Parameters<
    typeof actions.getTaxaAutocompleteList.action
  >[0] = {
    q: placesQuery,
    per_page: "10",
    is_active: true,
  };

  const { data: taxaAutocompleteList, isLoading: loadingTaxa } = useQuery({
    queryKey: [actions.getTaxaAutocompleteList.key, taxaParams],
    queryFn: ({ signal }) =>
      actions.getTaxaAutocompleteList.action(taxaParams, { signal }),
    enabled: taxaQuery.length > 0,
  });
  const { data: placesAutocompleteList, isLoading: loadingPlaces } = useQuery({
    queryKey: [actions.getPlacesAutocompleteList.key],
    queryFn: ({ signal }) =>
      actions.getPlacesAutocompleteList.action(placesParams, { signal }),
    enabled: placesQuery.length > 0,
  });

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        New Test
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Start a new test</DialogTitle>
        <DialogContent>
          <TextField
            type="number"
            placeholder="Number of questions"
            label="Length"
            autoFocus
            required
            id="num-questions"
            margin="normal"
          />

          <Autocomplete
            autoHighlight
            options={taxaAutocompleteList?.results || []}
            getOptionLabel={(taxa) => taxa.name!}
            loading={loadingTaxa}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Taxa"
                value={taxaValue}
                onChange={debounce((e) => setTaxaQuery(e.target.value), 1000)}
                onBlur={() => setTaxaValue("")}
                margin="normal"
              />
            )}
          />

          <Autocomplete
            autoHighlight
            options={placesAutocompleteList?.results || []}
            getOptionLabel={(place) => place.display_name!}
            loading={loadingPlaces}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Place"
                value={placesValue}
                onChange={debounce((e) => setPlacesQuery(e.target.value), 1000)}
                onBlur={() => setPlacesValue("")}
                margin="normal"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Start</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

type NewTestDialogProps = {
  initialValues?: NewTestParams;
};

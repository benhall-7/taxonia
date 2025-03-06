import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { NewTestForm, newTestValidate } from "./types";
import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";
// import { useLocation, useRoute, useRouter } from "wouter";
import { useDebounce } from "use-debounce";
import RadioSelect from "../../components/RadioSelect";
import { testRoute } from "src/routes/index/test";

export default function NewTestDialog({ initialValues, open, setOpen }: NewTestDialogProps) {
  const [params, setParams] = useState<NewTestForm>(
    initialValues || {
      questionCount: 15,
      introduced: "undefined",
      threatened: "undefined",
    }
  );

  // intermediate form state (e.g. autocomplete inputs)
  const [taxaValue, setTaxaValue] = useState(params?.taxon?.name || "");
  const [placesValue, setPlacesValue] = useState(
    params?.place?.display_name || ""
  );

  console.log(taxaValue);
  console.log(placesValue);

  const [taxaQuery] = useDebounce(taxaValue, 500);
  const [placesQuery] = useDebounce(placesValue, 500);

  const validatedParams = useMemo(() => newTestValidate(params), [params]);
  const navigate = testRoute.useNavigate();

  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    navigate({ to: testRoute.fullPath, search: validatedParams });
  };

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
    queryKey: [actions.getPlacesAutocompleteList.key, placesParams],
    queryFn: ({ signal }) =>
      actions.getPlacesAutocompleteList.action(placesParams, { signal }),
    enabled: placesQuery.length > 0,
  });

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Start a new test</DialogTitle>
        <DialogContent dividers>
          <FormLabel id="new-test-dialog-question-count">
            Number of questions
          </FormLabel>
          <Stack direction="row" alignItems="center">
            <Typography width="48px">{params.questionCount}</Typography>
            <Slider
              aria-labelledby="new-test-dialog-question-count"
              min={5}
              max={50}
              step={5}
              value={params.questionCount}
              valueLabelDisplay="auto"
              marks
              onChange={(_e, value) => {
                const correct = typeof value === "number" ? value : value[0];
                setParams({ ...params, questionCount: correct });
              }}
            />
          </Stack>

          <Autocomplete
            autoHighlight
            options={taxaAutocompleteList?.results || []}
            getOptionLabel={(place) => place.name!}
            value={params.taxon}
            onChange={(_e, value) =>
              setParams({ ...params, taxon: value ?? undefined })
            }
            loading={loadingTaxa}
            selectOnFocus
            filterOptions={(options) => options}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Taxa"
                onChange={(e) => setTaxaValue(e.target.value)}
                onBlur={() => setTaxaValue("")}
                margin="normal"
              />
            )}
            renderOption={(params, option) => {
              return (
                <Stack
                  {...params}
                  component="li"
                  direction="row"
                  spacing="12px"
                >
                  <img
                    src={option.default_photo?.url}
                    alt={option.preferred_common_name}
                    width="48px"
                    height="48px"
                    style={{ borderRadius: "8px" }}
                  />
                  <Box flex="1">
                    <Typography component="h5" noWrap textOverflow="ellipsis">
                      <Typography component="span" color="textSecondary">
                        {option.rank}
                      </Typography>{" "}
                      {option.name!}{" "}
                    </Typography>

                    <Typography component="span" color="textSecondary">
                      {option.preferred_common_name || option.matched_term}
                    </Typography>
                  </Box>
                </Stack>
              );
            }}
          />

          <Autocomplete
            autoHighlight
            options={placesAutocompleteList?.results || []}
            getOptionLabel={(place) => place.display_name!}
            value={params.place}
            onChange={(_e, value) =>
              setParams({ ...params, place: value ?? undefined })
            }
            loading={loadingPlaces}
            selectOnFocus
            filterOptions={(options) => options}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Place"
                onChange={(e) => setPlacesValue(e.target.value)}
                onBlur={() => setPlacesValue("")}
                margin="normal"
              />
            )}
          />

          <FormLabel id="new-test-dialog-introduced">
            Introduced status
          </FormLabel>
          <RadioSelect
            radioGroupProps={{
              "aria-labelledby": "new-test-dialog-introduced",
            }}
            options={["undefined", "true", "false"] as const}
            names={["Any", "Introduced", "Native"]}
            value={params.introduced}
            setValue={(value) => setParams({ ...params, introduced: value })}
          />

          <FormLabel id="new-test-dialog-threatened">
            Threatened status
          </FormLabel>
          <RadioSelect
            radioGroupProps={{
              "aria-labelledby": "new-test-dialog-threatened",
            }}
            options={["undefined", "true", "false"] as const}
            names={["Any", "Threatened", "Not threatened"]}
            value={params.threatened}
            setValue={(value) => setParams({ ...params, threatened: value })}
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
  initialValues?: NewTestForm;
  open: boolean;
  setOpen: (value: boolean) => void;
};

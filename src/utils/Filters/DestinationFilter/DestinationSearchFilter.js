import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

const DestinationSearchFilter = (props) => {
  return (
    <div>
      <Autocomplete
        onChange={(event, newValue) => {
          props.onValueChange(newValue);
        }}
        
        id={props.id}
        options={props.data}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
};

export default DestinationSearchFilter;

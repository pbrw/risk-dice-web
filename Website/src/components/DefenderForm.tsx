import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
// import { Button } from "react-bootstrap";

type DefenderProps = {
  units: number | null;
  onChange: (arg: number | null) => void;
};

export default function DefenderForm(props: DefenderProps) {
  //   const [attackUnits, setAttackUnits] = React.useState<number | null>(null);
  return (
    <Grid container spacing={1} sx={{ align: "center", mt: "10px" }}>
      <Typography
        component="div"
        sx={{ flexShrink: 0, width: "300px", m: "auto" }}
      >
        <Box
          sx={{
            typography: "title",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Defending territory
        </Box>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 1,
          m: "auto",
          maxWidth: "300px",

          // bgcolor: "background.paper",
          // borderRadius: 1,
        }}
      >
        {/* <Grid item xs={2} sm={2}> */}
        <Button
          sx={{
            flexShrink: 0,
            maxWidth: "70px",
            minWidth: "57px",
            width: "auto",
          }}
          size="medium"
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            props.onChange((props.units ?? 0) - 10);
          }}
        >
          -10
        </Button>
        {/* </Grid> */}
        {/* <Grid item xs={2} sm={2}> */}
        <Button
          sx={{
            flexShrink: 0,
            maxWidth: "60px",
            minWidth: "50px",
            ml: "5px",
            width: "auto",
          }}
          size="medium"
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            props.onChange((props.units ?? 0) - 1);
          }}
        >
          -1
        </Button>
        {/* </Grid> */}
        {/* <Grid item xs={3} sm={3}> */}
        <TextField
          // inputProps={{ inputMode: "decimal" }}
          // type="number"
          color="primary"
          sx={{
            // flexGrow: 1,
            // flexShrink: 0,
            maxWidth: "100px",
            minWidth: "75px",
            ml: "10px",
            mr: "10px",
            width: "auto",
          }}
          autoComplete="given-name"
          name="attack"
          required
          fullWidth
          id="attack2"
          size="small"
          value={props.units}
          onChange={(event) => {
            props.onChange(+event.target.value as number);
          }}
          // label="Attack"
          autoFocus
        />
        {/* </Grid> */}
        {/* <Grid item xs={2} sm={2}> */}
        <Button
          sx={{
            flexShrink: 0,
            maxWidth: "60px",
            minWidth: "50px",
            width: "auto",
            mr: "5px",
          }}
          size="medium"
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            props.onChange((props.units ?? 0) + 1);
          }}
        >
          +1
        </Button>
        {/* </Grid> */}
        {/* <Grid item xs={2} sm={2}> */}
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Button
          sx={{
            flexShrink: 0,
            maxWidth: "70px",
            minWidth: "57px",
            width: "auto",
          }}
          size="medium"
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            props.onChange((props.units ?? 0) + 10);
          }}
        >
          +10
        </Button>
        {/* </Box> */}
        {/* </Grid> */}
      </Box>
    </Grid>
  );
}

import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
// import { Button } from "react-bootstrap";

type DiceFormProps = {
  bb: boolean;
  onChange: (val: boolean) => void;
};

export default function DiceForm(props: DiceFormProps) {
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
          Dice Rolls
        </Box>
      </Typography>
      {/* <Typography
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
          Win probability
        </Box>
      </Typography> */}
      <Box
        sx={{ width: "100%", maxWidth: 300, textAlign: "center", m: "auto" }}
      >
        <ToggleButtonGroup
          color="primary"
          value={props.bb ? "bb" : "tr"}
          // value={alignment}
          exclusive
          onChange={(event, na) => {
            props.onChange(na === "bb");
          }}
          aria-label="Platform"
          sx={{ m: "auto", display: "block", p: "8px" }}
        >
          <ToggleButton value="bb">Balanced Blitz</ToggleButton>
          <ToggleButton value="tr">True Random</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Grid>
  );
}

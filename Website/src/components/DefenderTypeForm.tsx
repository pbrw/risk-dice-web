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

type DefenderFormProps = {
  type: string;
  onChange: (val: string) => void;
};

export default function DefenderTypeForm(props: DefenderFormProps) {
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
          Defender Type
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
          value={props.type}
          // value={alignment}
          size="small"
          exclusive
          onChange={(event, na) => {
            props.onChange(na);
          }}
          aria-label="Platform"
          sx={{ m: "auto", display: "block", p: "8px" }}
        >
          <ToggleButton value="normal">Normal</ToggleButton>
          <ToggleButton value="capital">Capital</ToggleButton>
          <ToggleButton value="zombie">Zombie</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Grid>
  );
}

import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
// import { Button } from "react-bootstrap";

type ChanceDisplayProps = {
  value: number | null;
};

export default function ChanceDisplay(props: ChanceDisplayProps) {
  //   const [attackUnits, setAttackUnits] = React.useState<number | null>(null);
  if (props.value == null) {
    return null;
  }
  return (
    <Grid container spacing={1} sx={{ align: "center", mt: "20px" }}>
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
          Win probability
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
        sx={{ width: "100%", maxWidth: 300, alignContent: "center", m: "auto" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ width: "100%" }}
        >
          {props.value.toFixed(2)}%
        </Typography>
      </Box>
    </Grid>
  );
}

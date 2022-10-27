import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CasinoIcon from "@mui/icons-material/Casino";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import About from "./About";
import AttackerForm from "./AttackerForm";
import DefenderForm from "./DefenderForm";
import ChanceDisplayProps from "./ChanceDisplay";
import ChanceDisplay from "./ChanceDisplay";
import { API_URL } from "../Config";
import DiceForm from "./DiceForm";

const theme = createTheme();

export default function SignUp() {
  const [attackUnits, setAttackUnits] = React.useState<number | null>(null);
  const [defendUnits, setDefendUnits] = React.useState<number | null>(null);
  const [prob, setProb] = React.useState<number | null>(null);
  const [BB, setBB] = React.useState<boolean>(true);

  const calc = (attack: number, defend: number) => {
    fetch(
      `${API_URL}/winChance?attackingTerritory=${attack}&defendingTerritory=${defend}&trueRandom=${!BB}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProb(100 * data.winProbability);
        console.log(data);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            <CasinoIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Risk Dice
          </Typography>
          {/* <About /> */}
          <Box sx={{ mt: 3 }}>
            <AttackerForm
              units={attackUnits}
              onChange={(val) => {
                setAttackUnits(val);
              }}
            />
            <DefenderForm
              units={defendUnits}
              onChange={(val) => {
                setDefendUnits(val);
              }}
            />
            <DiceForm bb={BB} onChange={(val) => setBB(val)} />
            <ChanceDisplay value={prob} />
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              sx={{
                m: "auto",
                mt: "20px",
                maxWidth: "300px",
                display: "block",
              }}
              onClick={() => calc(attackUnits ?? 0, defendUnits ?? 0)}
            >
              Calculate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

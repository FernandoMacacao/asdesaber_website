import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, MenuItem, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkWithScroll from "../LinkWithScroll";
import SectionHeader from "../SectionHeader";
import PricePDF from "../../assets/regulamento_23_24.pdf";

const LEVELS = [
  "1º ao 8º ano",
  "9º ano",
  "Disciplina sem exame 10º e 11º ano",
  "Disciplina com exame 11º e 12º ano",
  "Superior",
];

const WEEKLY_HOURS = [
  [1, "1h"],
  [1.5, "1h30"],
  [2, "2h"],
  [2.5, "2h30"],
  [3, "3h"],
];

const TYPES = ["Online", "Presencial"];

const MODES = ["Individual", "Grupo"];

const PRICES = {
  [TYPES[0]]: {
    [MODES[0]]: {
      [LEVELS[0]]: 23,
      [LEVELS[1]]: 23,
      [LEVELS[2]]: 27,
      [LEVELS[3]]: 30,
      [LEVELS[4]]: 40,
    },
  },
  [TYPES[1]]: {
    [MODES[0]]: {
      [LEVELS[0]]: 24,
      [LEVELS[1]]: 25,
      [LEVELS[2]]: 29,
      [LEVELS[3]]: 32,
      [LEVELS[4]]: 42,
    },
    [MODES[1]]: {
      [LEVELS[0]]: 18,
      [LEVELS[1]]: 18,
      [LEVELS[2]]: 23,
      [LEVELS[3]]: 25,
      [LEVELS[4]]: 36,
    },
  },
};

const Simulator = () => {
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");
  const [type, setType] = useState("");
  const [mode, setMode] = useState("Individual");
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const price = PRICES[type][mode][level];
    setPrice(price * hours * 4);
  };

  return (
    <Box my={10}>
      <SectionHeader
        title="Simule o preço"
        subtitle="Saiba o valor mensal das suas explicações"
      />
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column">
          <TextField
            required
            select
            id="level"
            label="Nível"
            defaultValue=""
            onChange={(event) => setLevel(event.target.value)}
          >
            {LEVELS.map((level, id) => (
              <MenuItem key={id} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            select
            id="hours"
            label="Horas Semanais"
            defaultValue=""
            onChange={(event) => setHours(event.target.value)}
            sx={{ mt: 2 }}
          >
            {WEEKLY_HOURS.map((hours, id) => (
              <MenuItem key={id} value={hours[0]}>
                {hours[1]}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            select
            id="type"
            label="Modalidade"
            defaultValue=""
            onChange={(event) => {
              setType(event.target.value);
              setMode("Individual");
            }}
            sx={{ mt: 2 }}
          >
            {TYPES.map((tp, id) => (
              <MenuItem key={id} value={tp}>
                {tp}
              </MenuItem>
            ))}
          </TextField>
          {type === "Presencial" ? (
            <TextField
              required
              select
              id="mode"
              label="Tipo"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              sx={{ mt: 2 }}
            >
              {MODES.map((md, id) => (
                <MenuItem key={id} value={md}>
                  {md}
                </MenuItem>
              ))}
            </TextField>
          ) : undefined}

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={type === "" || level === "" || hours === ""}
            onClick={calculatePrice}
          >
            Calcular
          </Button>
          {price !== 0 ? (
            <>
              <Typography
                variant="h6"
                color="primary"
                textAlign="center"
                sx={{ mt: 3 }}
              >
                Valor da sua Mensalidade:
              </Typography>
              <Typography
                variant="h5"
                color="textSecondary"
                fontSize="2.5rem"
                textAlign="center"
              >
                {price}€
              </Typography>
            </>
          ) : undefined}
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Typography
          variant="body1"
          color="textPrimary"
          textAlign="center"
          fontSize="0.875rem"
        >
          *Todos os preços indicados já incluem IVA à taxa de 23%.
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          textAlign="center"
          fontSize="0.875rem"
        >
          *No ato de inscrição é cobrado o valor da inscrição (40€) e uma
          mensalidade de caução que abate na última mensalidade.
        </Typography>
        <Typography variant="body1" color="primary" textAlign="center">
          *Caso permaneça com alguma questão consulte o{" "}
          <Link
            to={PricePDF}
            target="_blank"
            style={{ color: "#1893c6", fontWeight: 700 }}
          >
            regulamento aqui
          </Link>{" "}
          ou{" "}
          <LinkWithScroll
            to="/contactos"
            style={{ color: "#1893c6", fontWeight: 700 }}
          >
            contacte-nos.
          </LinkWithScroll>
        </Typography>
      </Container>
    </Box>
  );
};

export default Simulator;

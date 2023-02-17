import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, MenuItem, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkWithScroll from "../LinkWithScroll";
import SectionHeader from "../SectionHeader";
import PricePDF from "../../assets/pdf_prices.pdf";

const levels = [
  "1º ao 8º ano",
  "9º ano",
  "Disciplina sem exame 10º e 11º ano",
  "Disciplina com exame 11º e 12º ano",
  "Superior",
];

const weeklyHours = [
  [1, "1h"],
  [1.5, "1h30"],
  [2, "2h"],
  [2.5, "2h30"],
  [3, "3h"],
];

const types = ["Online", "Presencial"];

const modes = ["Individual", "Grupo"];

const Simulator = () => {
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");
  const [type, setType] = useState("");
  const [mode, setMode] = useState("");
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    if (mode.target.value === "Individual") {
      switch (level.target.value) {
        case levels[0]:
          type === types[0]
            ? setPrice(23 * hours.target.value * 4)
            : setPrice(24 * hours.target.value * 4);
          break;
        case levels[1]:
          type === types[0]
            ? setPrice(23 * hours.target.value * 4)
            : setPrice(25 * hours.target.value * 4);
          break;
        case levels[2]:
          type === types[0]
            ? setPrice(27 * hours.target.value * 4)
            : setPrice(29 * hours.target.value * 4);
          break;
        case levels[3]:
          type === types[0]
            ? setPrice(30 * hours.target.value * 4)
            : setPrice(32 * hours.target.value * 4);
          break;
        case levels[4]:
          type === types[0]
            ? setPrice(40 * hours.target.value * 4)
            : setPrice(42 * hours.target.value * 4);
          break;
        default:
          break;
      }
    } else {
      switch (level.target.value) {
        case levels[0]:
          setPrice(18 * hours.target.value * 4);
          break;
        case levels[1]:
          setPrice(18 * hours.target.value * 4);
          break;
        case levels[2]:
          setPrice(23 * hours.target.value * 4);
          break;
        case levels[3]:
          setPrice(25 * hours.target.value * 4);
          break;
        case levels[4]:
          setPrice(36 * hours.target.value * 4);
          break;
        default:
          break;
      }
    }
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
            onChange={setLevel}
          >
            {levels.map((level, id) => (
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
            onChange={setHours}
            sx={{ mt: 2 }}
          >
            {weeklyHours.map((hours, id) => (
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
            onChange={(event) => setType(event.target.value)}
            sx={{ mt: 2 }}
          >
            {types.map((tp, id) => (
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
              defaultValue=""
              onChange={setMode}
              sx={{ mt: 2 }}
            >
              {modes.map((md, id) => (
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
            disabled={
              type === "" ||
              level === "" ||
              hours === "" ||
              (type === "Presencial" && mode === "")
            }
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
          mensalidade de caução que abate na ultima mensalidade.
        </Typography>
        <Typography variant="body1" color="primary" textAlign="center">
          *Caso permaneça com alguma questão consulte o{" "}
          <Link
            to={PricePDF}
            target="_blank"
            style={{ color: "#1893c6", fontWeight: 700 }}
          >
            preçário aqui
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

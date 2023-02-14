import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, MenuItem, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";

const levels = [
  "1º ao 6º ano",
  "7º e 8º ano",
  "9º ano",
  "10º e 11º ano",
  "Superior",
  "Aulas particulares de língua estrangeira",
];

const weeklyHours = [
  [1, "1h"],
  [1.5, "1h30"],
  [2, "2h"],
  [2.5, "2h30"],
  [3, "3h"],
];

const types = ["Online", "Presencial"];

const Simulator = () => {
  const [level, setLevel] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    switch (level.target.value) {
      case levels[0] || levels[1]:
        type.target.value === types[0]
          ? setPrice(23 * hours.target.value * 4)
          : setPrice(24 * hours.target.value * 4);
        break;
      case levels[2]:
        type.target.value === types[0]
          ? setPrice(23 * hours.target.value * 4)
          : setPrice(25 * hours.target.value * 4);
        break;
      case levels[3]:
        type.target.value === types[0]
          ? setPrice(27 * hours.target.value * 4)
          : setPrice(29 * hours.target.value * 4);
        break;
      case levels[4]:
        type.target.value === types[0]
          ? setPrice(40 * hours.target.value * 4)
          : setPrice(42 * hours.target.value * 4);
        break;
      case levels[5]:
        type.target.value === types[0]
          ? setPrice(28 * hours.target.value * 4)
          : setPrice(32 * hours.target.value * 4);
        break;
      default:
        break;
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
            onChange={setType}
            sx={{ mt: 2 }}
          >
            {types.map((tp, id) => (
              <MenuItem key={id} value={tp}>
                {tp}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={
              type === undefined || level === undefined || hours === undefined
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
          <Link to="/" style={{ color: "#1893c6", fontWeight: 700 }}>
            preçário aqui
          </Link>{" "}
          ou{" "}
          <Link to="/contactos" style={{ color: "#1893c6", fontWeight: 700 }}>
            contacte-nos.
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Simulator;

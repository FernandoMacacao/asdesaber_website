import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";

const subjects = [
  "Explicações",
  "Estudo Acompanhado",
  "Cursos Intensivos",
  "Outro",
];

const PHONE_REGEX = "^(9[1236][0-9]) ?([0-9]{3}) ?([0-9]{3})$";

const schema = yup.object().shape({
  firstName: yup.string().required("Por favor insira o seu primeiro nome."),
  lastName: yup.string().required("Por favor insira o seu último nome."),
  email: yup
    .string()
    .email("Por favor insira um email válido.")
    .required("Por favor insira o seu email."),
  phone: yup
    .string()
    .matches(PHONE_REGEX, { message: "Por favor insira um número válido." }),
  subject: yup
    .string()
    .oneOf(["Explicações", "Estudo Acompanhado", "Cursos Intensivos", "Outro"])
    .required("Por favor insira um assunto."),
  subject2: yup.string().when("subject", {
    is: "Outro",
    then: yup
      .string()
      .max(20, { message: "Por favor insira no máximo 20 caracteres." })
      .required("Por favor insira um assunto."),
    otherwise: yup.string().notRequired(),
  }),
  body: yup.string().required("Por favor insira o corpo da mensagem."),
});

const onSubmit = () => {
  console.log("Submitted");
};

const MessageForm = () => {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [subject, setSubject] = useState("");

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const { values, touched, handleBlur, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        subject2: "",
        body: "",
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <Box
      py={3}
      boxShadow=" -2px 0px 5px 0px rgba(0,0,0,0.75)"
      height="100%"
      display="flex"
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          color="textSecondary"
          textAlign="center"
          mb={{ md: 5, xs: 2 }}
        >
          Envie-nos uma mensagem
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="text"
              name="firstName"
              label="Primeiro Nome"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.firstName && touched.firstName ? errors.firstName : ""
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 1, md: 0 }}>
            <TextField
              required
              type="text"
              name="lastName"
              label="Último Nome"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.lastName && touched.lastName ? errors.lastName : ""
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email ? errors.email : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 1, md: 0 }}>
            <TextField
              type="phone"
              id="phone"
              label="Telemóvel"
              variant="outlined"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.phone && touched.phone ? errors.phone : ""}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <TextField
              required
              name="subject"
              select
              label="Assunto"
              fullWidth
              value={values.subject}
              onChange={(e) => {
                handleChange(e);
                handleSubject(e);
              }}
              onBlur={handleBlur}
              helperText={
                errors.subject && touched.subject ? errors.subject : ""
              }
            >
              {subjects.map((subject, id) => (
                <MenuItem key={id} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        {subject === "Outro" ? (
          <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <TextField
                required
                type="text"
                name="subject2"
                label="Outro assunto"
                variant="outlined"
                value={values.subject2}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.subject2 && touched.subject2 ? errors.subject2 : ""
                }
                fullWidth
              />
            </Grid>
          </Grid>
        ) : undefined}
        <Grid container spacing={1} mt={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <TextField
              required
              name="body"
              label="Corpo da Mensagem"
              multiline
              rows={4}
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.body && touched.body ? errors.body : ""}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={{ xs: 0, md: 2 }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={isFullWidth}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default MessageForm;

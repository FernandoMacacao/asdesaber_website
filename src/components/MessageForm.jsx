import React from "react";
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
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

const SUBJECTS = [
  "Apoio Psicopedagógico",
  "Explicações",
  "Formação",
  "Preparação para Exames",
  "Outro",
];

const PHONE_REGEX = "^(9[1236][0-9]) ?([0-9]{3}) ?([0-9]{3})$";
const NAME_REGEX = "^[A-Za-zÀ-ÖØ-öø-ÿs.'-]{1,40}$";

const sanitize = (value) => {
  return DOMPurify.sanitize(value);
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .transform(sanitize)
    .matches(NAME_REGEX, { message: "Por favor insira um nome válido." })
    .required("Por favor insira o seu primeiro nome."),
  lastName: yup
    .string()
    .transform(sanitize)
    .matches(NAME_REGEX, { message: "Por favor insira um nome válido." })
    .required("Por favor insira o seu último nome."),
  email: yup
    .string()
    .transform(sanitize)
    .email("Por favor insira um email válido.")
    .required("Por favor insira o seu email."),
  phone: yup
    .string()
    .transform(sanitize)
    .matches(PHONE_REGEX, { message: "Por favor insira um número válido." }),
  subject: yup
    .string()
    .transform(sanitize)
    .oneOf(SUBJECTS)
    .required("Por favor insira um assunto."),
  subject2: yup.string().when("subject", {
    is: "Outro",
    then: yup
      .string()
      .transform(sanitize)
      .max(20, "Por favor insira no máximo 20 caracteres.")
      .required("Por favor insira um assunto."),
    otherwise: yup.string().transform(sanitize).notRequired(),
  }),
  body: yup
    .string()
    .transform(sanitize)
    .required("Por favor insira o corpo da mensagem."),
});

const MessageForm = ({ shadow }) => {
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const onSubmit = () => {
    const formTemplate = {
      name: values.firstName + " " + values.lastName,
      email: values.email,
      phone: values.phone === "" ? "Não foi fornecido" : values.phone,
      subject:
        values.subject === SUBJECTS[4] ? values.subject2 : values.subject,
      body: values.body,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formTemplate,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          notification.success({
            message: "Mensagem enviada",
            description: "A sua mensagem foi enviada com sucesso.",
            placement: "top",
          });
          resetForm();
        },
        () => {
          notification.error({
            message: "Ocorreu um erro",
            description:
              "Não conseguimos enviar a sua mensagem, por favor tente mais tarde",
            placement: "top",
          });
        }
      );
  };

  const {
    values,
    touched,
    handleBlur,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
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
      py={shadow ? 3 : 0}
      my={shadow ? 0 : 10}
      boxShadow={shadow ? " -2px 0px 5px 0px rgba(0,0,0,0.75)" : undefined}
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
              name="phone"
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
              }}
              onBlur={handleBlur}
              helperText={
                errors.subject && touched.subject ? errors.subject : ""
              }
            >
              {SUBJECTS.map((subject, id) => (
                <MenuItem key={id} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        {values.subject === SUBJECTS[4] ? (
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

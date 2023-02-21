import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Theme";
import Navbar from "./components/Navbar";
import {
  Home,
  Tutoring,
  Courses,
  Support,
  Graduation,
  About,
  Contacts,
} from "./pages/index";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        {/* NAVBAR ROUTES */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explicacoes" exact element={<Tutoring />} />
          <Route path="/explicacoes/cursos" exact element={<Courses />} />
          <Route path="/apoio" exact element={<Support />} />
          <Route path="/formacao" exact element={<Graduation />} />
          <Route path="/sobrenos" exact element={<About />} />
          <Route path="/contactos" exact element={<Contacts />} />
        </Routes>
        <WhatsAppButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
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
  NotFound,
} from "./pages/index";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WhatsAppButton from "./components/WhatsAppButton";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <WhatsAppButton />
  </>
);

const NotFoundLayout = ({ children }) => <>{children}</>;

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* NAVBAR ROUTES */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/explicacoes"
            exact
            element={
              <DefaultLayout>
                <Tutoring />
              </DefaultLayout>
            }
          />
          <Route
            path="/explicacoes/cursos"
            exact
            element={
              <DefaultLayout>
                <Courses />
              </DefaultLayout>
            }
          />
          <Route
            path="/apoio"
            exact
            element={
              <DefaultLayout>
                <Support />
              </DefaultLayout>
            }
          />
          <Route
            path="/formacao"
            exact
            element={
              <DefaultLayout>
                <Graduation />
              </DefaultLayout>
            }
          />
          <Route
            path="/sobrenos"
            exact
            element={
              <DefaultLayout>
                <About />
              </DefaultLayout>
            }
          />
          <Route
            path="/contactos"
            exact
            element={
              <DefaultLayout>
                <Contacts />
              </DefaultLayout>
            }
          />
          <Route
            path="*"
            exact
            element={
              <NotFoundLayout>
                <NotFound />
              </NotFoundLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

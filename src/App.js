import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/Theme'
import Navbar from "./components/Navbar"
import { Home, Tutoring, Support, Graduation, About, Contacts } from './pages/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        {/* NAVBAR ROUTES */}
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/explicacoes" exact element={<Tutoring/>}/>
            <Route path="/apoio" exact element={<Support/>}/>
            <Route path="/formacao" exact element={<Graduation/>}/>
            <Route path="/sobrenos" exact element={<About/>}/>
            <Route path="/contactos" exact element={<Contacts/>}/>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

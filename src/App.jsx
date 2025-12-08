import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./pages/Personajes.jsx";
import Locaciones from "./pages/Locaciones.jsx";
import Episodios from "./pages/Episodios.jsx";
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Inicio from './pages/Inicio.jsx';
import RutasPrivadas from "./routes/RutasPrivadas.jsx";
import RutasPublicas from "./routes/RutasPublicas.jsx";
import AuthProvider from "./context/AuthContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
          <Route path="/inicio" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
          <Route path="/login" element={<RutasPublicas><Login/></RutasPublicas>}/>
          <Route path="/registro" element={<RutasPublicas><Registro/></RutasPublicas>}/>
          <Route path="/personajes" element={<RutasPrivadas><Personajes/></RutasPrivadas>}/>
          <Route path="/locaciones" element={<RutasPrivadas><Locaciones/></RutasPrivadas>}/>
          <Route path="/episodios" element={<RutasPrivadas><Episodios/></RutasPrivadas>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
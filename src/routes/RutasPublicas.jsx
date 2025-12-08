import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RutasPublicas = ({ children }) => {
  const { estaAutenticado } = useContext(AuthContext);

  // Si el usuario ya está autenticado, redirigir al inicio
  return estaAutenticado ? <Navigate to="/" /> : children;
};

export default RutasPublicas;
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RutasPrivadas = ({ children }) => {
  const { estaAutenticado, cargando } = useContext(AuthContext);

  if (cargando) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ background: '#0a0118' }}>
        <div className="text-center">
          <div className="spinner-border text-success" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-white">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  return estaAutenticado ? children : <Navigate to="/login" />;
};

export default RutasPrivadas;
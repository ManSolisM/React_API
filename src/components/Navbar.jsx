import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarSesion = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav style={{
      background: 'rgba(10, 1, 24, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid rgba(0, 255, 65, 0.3)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-decoration-none d-flex align-items-center"
            style={{
              color: '#00ff41',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(0, 255, 65, 0.6)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '2rem', marginRight: '10px' }}>🌀</span>
            Rick & Morty
          </NavLink>

          {/* Menu Desktop */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `btn fw-semibold px-4 py-2 ${isActive ? 'active-link' : ''}`
              }
              style={({ isActive }) => ({
                background: isActive ? 'linear-gradient(135deg, #00ff41, #39ff14)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: isActive ? '#000' : 'white',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 15px rgba(0, 255, 65, 0.4)' : 'none'
              })}
            >
              🏠 Inicio
            </NavLink>

            <NavLink
              to="/personajes"
              className={({ isActive }) => 
                `btn fw-semibold px-4 py-2 ${isActive ? 'active-link' : ''}`
              }
              style={({ isActive }) => ({
                background: isActive ? 'linear-gradient(135deg, #00ff41, #39ff14)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: isActive ? '#000' : 'white',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 15px rgba(0, 255, 65, 0.4)' : 'none'
              })}
            >
              👥 Personajes
            </NavLink>

            <NavLink
              to="/locaciones"
              className={({ isActive }) => 
                `btn fw-semibold px-4 py-2 ${isActive ? 'active-link' : ''}`
              }
              style={({ isActive }) => ({
                background: isActive ? 'linear-gradient(135deg, #00ff41, #39ff14)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: isActive ? '#000' : 'white',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 15px rgba(0, 255, 65, 0.4)' : 'none'
              })}
            >
              🌍 Locaciones
            </NavLink>

            <NavLink
              to="/episodios"
              className={({ isActive }) => 
                `btn fw-semibold px-4 py-2 ${isActive ? 'active-link' : ''}`
              }
              style={({ isActive }) => ({
                background: isActive ? 'linear-gradient(135deg, #00ff41, #39ff14)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: isActive ? '#000' : 'white',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 4px 15px rgba(0, 255, 65, 0.4)' : 'none'
              })}
            >
              📺 Episodios
            </NavLink>

            {/* Usuario Dropdown */}
            {usuario && (
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle fw-semibold px-4 py-2"
                  type="button"
                  id="dropdownUser"
                  data-bs-toggle="dropdown"
                  style={{
                    background: 'rgba(97, 218, 251, 0.2)',
                    border: '2px solid rgba(97, 218, 251, 0.4)',
                    borderRadius: '10px',
                    color: '#61dafb'
                  }}
                >
                  👤 {usuario.nombre}
                </button>
                <ul 
                  className="dropdown-menu dropdown-menu-end"
                  style={{
                    background: 'rgba(10, 1, 24, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    marginTop: '10px'
                  }}
                >
                  <li>
                    <button
                      className="dropdown-item"
                      style={{ color: '#61dafb', padding: '10px 20px' }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(97, 218, 251, 0.1)'}
                      onMouseOut={(e) => e.target.style.background = 'transparent'}
                    >
                      ✏️ Editar Perfil
                    </button>
                  </li>
                  <li><hr className="dropdown-divider" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} /></li>
                  <li>
                    <button
                      onClick={cerrarSesion}
                      className="dropdown-item"
                      style={{ color: '#ff6b6b', padding: '10px 20px' }}
                      onMouseOver={(e) => e.target.style.background = 'rgba(255, 107, 107, 0.1)'}
                      onMouseOut={(e) => e.target.style.background = 'transparent'}
                    >
                      🚪 Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Botón Menu Mobile */}
          <button
            className="d-lg-none btn"
            onClick={() => setMenuAbierto(!menuAbierto)}
            style={{
              background: 'rgba(0, 255, 65, 0.2)',
              border: '2px solid rgba(0, 255, 65, 0.4)',
              color: '#00ff41',
              borderRadius: '10px',
              padding: '10px 15px'
            }}
          >
            {menuAbierto ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuAbierto && (
          <div className="d-lg-none pb-3">
            <div className="d-flex flex-column gap-2">
              <NavLink
                to="/"
                onClick={() => setMenuAbierto(false)}
                className="btn text-start"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                🏠 Inicio
              </NavLink>
              <NavLink
                to="/personajes"
                onClick={() => setMenuAbierto(false)}
                className="btn text-start"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                👥 Personajes
              </NavLink>
              <NavLink
                to="/locaciones"
                onClick={() => setMenuAbierto(false)}
                className="btn text-start"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                🌍 Locaciones
              </NavLink>
              <NavLink
                to="/episodios"
                onClick={() => setMenuAbierto(false)}
                className="btn text-start"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                📺 Episodios
              </NavLink>
              {usuario && (
                <>
                  <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <div style={{ color: '#61dafb', padding: '10px 16px' }}>
                    👤 {usuario.nombre} {usuario.apellido}
                  </div>
                  <button
                    onClick={() => {
                      cerrarSesion();
                      setMenuAbierto(false);
                    }}
                    className="btn text-start"
                    style={{
                      background: 'rgba(255, 107, 107, 0.2)',
                      border: 'none',
                      color: '#ff6b6b',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}
                  >
                    🚪 Cerrar Sesión
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
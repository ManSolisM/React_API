import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import RickMortyBackground from '../components/RickMortyBackground';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

const Inicio = () => {
  const { usuario, logout } = useContext(AuthContext);
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Explorar Personajes",
      description: "Descubre todos los personajes del multiverso de Rick and Morty",
      icon: "👥",
      link: "/personajes"
    },
    {
      id: 2,
      title: "Locaciones",
      description: "Viaja a través de dimensiones y planetas",
      icon: "🌍",
      link: "/locaciones"
    },
    {
      id: 3,
      title: "Episodios",
      description: "Explora todas las temporadas y episodios",
      icon: "📺",
      link: "/episodios"
    }
  ];

  return (
    <>
      <RickMortyBackground />
      <Navbar />
      
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center text-white py-5">
        <div className="row justify-content-center w-100">
          <div className="col-lg-10 col-xl-8">
            
            {/* Barra de usuario superior */}
            {usuario && (
              <div className="mb-4 p-3 rounded-4 d-flex justify-content-between align-items-center" style={{
                background: 'rgba(0, 255, 65, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 65, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 255, 65, 0.2)'
              }}>
                <div>
                  <p className="mb-0" style={{ color: '#61dafb', fontSize: '0.9rem' }}>Bienvenido de vuelta</p>
                  <h5 className="mb-0 fw-bold" style={{ color: '#00ff41' }}>
                    {usuario.nombre} {usuario.apellido}
                  </h5>
                </div>
              </div>
            )}

            {/* Hero Section */}
            <div className="text-center mb-5">
              <h1 className="display-1 fw-bold mb-4" style={{
                textShadow: '0 0 30px rgba(0, 255, 65, 0.8), 0 0 60px rgba(57, 255, 20, 0.6)',
                letterSpacing: '3px',
                color: '#00ff41',
                fontSize: 'clamp(3rem, 8vw, 6rem)'
              }}>
                Rick and Morty
              </h1>
              
              <p className="lead mb-4" style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: '#a8dadc',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Explora el multiverso completo
              </p>

              <div className="mb-5">
                <Link 
                  to="/personajes"
                  className="btn btn-lg fw-bold px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #00ff41, #39ff14)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#000',
                    fontSize: '1.2rem',
                    boxShadow: '0 10px 30px rgba(0, 255, 65, 0.4)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.05)';
                    e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 65, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 65, 0.4)';
                  }}
                >
                  🌀 Entrar al Portal
                </Link>
              </div>
            </div>

            {/* Features Cards */}
            <div className="row g-4 mb-5">
              {features.map((feature) => (
                <div key={feature.id} className="col-md-4">
                  <Link 
                    to={feature.link}
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={() => setHoveredCard(feature.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="h-100 p-4 rounded-4 text-center"
                      style={{
                        background: hoveredCard === feature.id 
                          ? 'rgba(0, 255, 65, 0.15)' 
                          : 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: hoveredCard === feature.id 
                          ? '2px solid rgba(0, 255, 65, 0.5)' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: hoveredCard === feature.id 
                          ? '0 15px 40px rgba(0, 255, 65, 0.3)' 
                          : '0 8px 32px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        transform: hoveredCard === feature.id ? 'translateY(-10px)' : 'translateY(0)',
                        cursor: 'pointer',
                        minHeight: '250px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <div 
                        className="mb-3"
                        style={{
                          fontSize: '4rem',
                          filter: hoveredCard === feature.id ? 'drop-shadow(0 0 20px rgba(0, 255, 65, 0.8))' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {feature.icon}
                      </div>
                      <h3 
                        className="h4 mb-3 fw-bold"
                        style={{
                          color: hoveredCard === feature.id ? '#00ff41' : 'white',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="mb-0"
                        style={{ 
                          color: hoveredCard === feature.id ? '#a8dadc' : '#6c757d',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="row g-4 mt-5">
              <div className="col-md-4">
                <div className="text-center p-4 rounded-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h2 className="display-4 fw-bold mb-2" style={{ color: '#00ff41' }}>800+</h2>
                  <p className="text-white mb-0">Personajes</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4 rounded-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h2 className="display-4 fw-bold mb-2" style={{ color: '#39ff14' }}>100+</h2>
                  <p className="text-white mb-0">Locaciones</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4 rounded-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h2 className="display-4 fw-bold mb-2" style={{ color: '#61dafb' }}>50+</h2>
                  <p className="text-white mb-0">Episodios</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-5 pt-5">
              <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                Powered by The Rick and Morty API
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
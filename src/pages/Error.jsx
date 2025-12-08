import { Link } from 'react-router-dom';
import RickMortyBackground from '../components/RickMortyBackground';

const Error = () => {
  return (
    <>
      <RickMortyBackground />
      
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center text-white">
        <div className="row justify-content-center w-100">
          <div className="col-11 col-md-10 col-lg-8 col-xl-6">
            
            <div className="text-center">
              
              <div className="mb-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <h1 className="display-1 fw-bold mb-0" style={{
                  fontSize: 'clamp(5rem, 15vw, 12rem)',
                  color: '#ff0000',
                  textShadow: '0 0 40px rgba(255, 0, 0, 0.8)',
                  letterSpacing: '10px'
                }}>
                  404
                </h1>
              </div>

              <div className="mb-4">
                <h2 className="h1 fw-bold mb-3" style={{
                  color: '#ff6b6b',
                  textShadow: '0 0 20px rgba(255, 107, 107, 0.5)'
                }}>
                  ¡Portal Defectuoso!
                </h2>
                <p className="lead mb-4" style={{ color: '#a8dadc', fontSize: '1.3rem' }}>
                  Esta dimensión no existe... o aún no ha sido descubierta
                </p>
              </div>

              <div className="p-4 rounded-4 mb-5" style={{
                background: 'rgba(255, 107, 107, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <p style={{ color: '#ff6b6b', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  🚨 Error en el Portal Gun
                </p>
                <p style={{ color: '#a8dadc', marginBottom: 0 }}>
                  Parece que el portal te llevó a una dimensión inexistente. 
                  Rick probablemente olvidó calibrar las coordenadas dimensionales.
                </p>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
                <Link 
                  to="/"
                  className="btn btn-lg fw-bold px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #00ff41, #39ff14)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#000',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(0, 255, 65, 0.4)'
                  }}
                >
                  🏠 Volver al Inicio
                </Link>

                <Link 
                  to="/personajes"
                  className="btn btn-lg fw-bold px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '15px',
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
                  }}
                >
                  👥 Ver Personajes
                </Link>
              </div>

              <div className="mt-5 pt-5">
                <p style={{ color: '#6c757d', fontSize: '0.85rem', fontStyle: 'italic' }}>
                  "Wubba Lubba Dub Dub! Esta página no existe" - Rick Sanchez
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
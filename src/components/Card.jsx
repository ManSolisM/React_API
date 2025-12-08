import { useState } from 'react';

const Card = ({ personaje }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const getFondoPorEspecie = (especie) => {
    const fondos = {
      "Human": "linear-gradient(135deg, #4e73df, #1cc88a)",
      "Alien": "linear-gradient(135deg, #d38312, #a83279)",
      "Robot": "linear-gradient(135deg, #434343, #000000)",
      "Humanoid": "linear-gradient(135deg, #00b4db, #0083b0)",
      "Poopybutthole": "linear-gradient(135deg, #f7f43e, #b06b16)",
      "Mythological Creature": "linear-gradient(135deg, #8e2de2, #4a00e0)",
      "Animal": "linear-gradient(135deg, #56ab2f, #a8e063)",
      "Cronenberg": "linear-gradient(135deg, #c94b4b, #4b134f)",
      "Disease": "linear-gradient(135deg, #134e5e, #71b280)"
    };
    return fondos[especie] || "linear-gradient(135deg, #6a11cb, #2575fc)";
  };

  const getStatusColor = (status) => {
    const colores = {
      "Alive": "#00ff41",
      "Dead": "#ff0000",
      "unknown": "#ffc107"
    };
    return colores[status] || "#9ca3af";
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'Alive': return 'Vivo';
      case 'Dead': return 'Muerto';
      default: return 'Desconocido';
    }
  };

  return (
    <>
      <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4">
        <div 
          onClick={() => setMostrarModal(true)}
          className="position-relative d-inline-block"
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: getFondoPorEspecie(personaje.species),
              padding: "5px",
              margin: "0 auto",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,255,65,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <img
              src={personaje.image}
              alt={personaje.name}
              className="rounded-circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "3px solid white"
              }}
            />
          </div>
          
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: getStatusColor(personaje.status),
              border: "3px solid white",
              boxShadow: `0 0 10px ${getStatusColor(personaje.status)}`
            }}
            title={personaje.status}
          />
        </div>
        <p className="fw-bold mt-2 text-white" style={{ fontSize: '0.95rem' }}>
          {personaje.name}
        </p>
        <p className="small" style={{ color: '#61dafb' }}>
          {personaje.species}
        </p>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 0.3s',
            padding: '20px'
          }}
          onClick={() => setMostrarModal(false)}
        >
          <div 
            style={{
              background: getFondoPorEspecie(personaje.species),
              padding: '30px',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'slideIn 0.3s',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img 
                src={personaje.image} 
                alt={personaje.name}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '5px solid white',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
            </div>
            
            <h2 style={{
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              fontSize: '24px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              {personaje.name}
            </h2>
            
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#333' }}>Estado:</strong>{' '}
                <span style={{
                  color: getStatusColor(personaje.status),
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: getStatusColor(personaje.status),
                    display: 'inline-block',
                    boxShadow: `0 0 10px ${getStatusColor(personaje.status)}`
                  }}></span>
                  {getStatusText(personaje.status)}
                </span>
              </div>
              
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>Especie:</strong> {personaje.species}
              </p>
              
              {personaje.type && (
                <p style={{ margin: '10px 0', color: '#333' }}>
                  <strong>Tipo:</strong> {personaje.type}
                </p>
              )}
              
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>Género:</strong> {personaje.gender}
              </p>
              
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>Origen:</strong> {personaje.origin.name}
              </p>
              
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>Ubicación:</strong> {personaje.location.name}
              </p>
              
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>Episodios:</strong> {personaje.episode.length}
              </p>
            </div>
            
            <button
              onClick={() => setMostrarModal(false)}
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #00ff41, #39ff14)',
                color: '#000',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 15px rgba(0, 255, 65, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 255, 65, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 65, 0.4)';
              }}
            >
              Cerrar
            </button>
          </div>
          
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideIn {
              from { transform: translateY(-50px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Card;
import { useState, useEffect } from 'react';
import RickMortyBackground from '../components/RickMortyBackground';
import Navbar from '../components/Navbar';

const Locaciones = () => {
  const [locaciones, setLocaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [dimensionSeleccionada, setDimensionSeleccionada] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLocaciones(pagina, busqueda, tipoSeleccionado, dimensionSeleccionada);
    }, 800);
    return () => clearTimeout(timer);
  }, [busqueda]);

  useEffect(() => {
    fetchLocaciones(pagina, busqueda, tipoSeleccionado, dimensionSeleccionada);
  }, [pagina, tipoSeleccionado, dimensionSeleccionada]);

  const fetchLocaciones = async (page, nombre = "", tipo = "", dimension = "") => {
    try {
      setCargando(true);
      let url = `https://rickandmortyapi.com/api/location?page=${page}`;
      
      if (nombre) url += `&name=${nombre}`;
      if (tipo) url += `&type=${tipo}`;
      if (dimension) url += `&dimension=${dimension}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('No se encontraron locaciones');
      
      const data = await response.json();
      setLocaciones(data.results);
      setTotalPaginas(data.info.pages);
      setCargando(false);
    } catch (err) {
      setLocaciones([]);
      setCargando(false);
    }
  };

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPagina(nuevaPagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const limpiarFiltros = () => {
    setBusqueda("");
    setTipoSeleccionado("");
    setDimensionSeleccionada("");
    setPagina(1);
  };

  if (cargando && locaciones.length === 0) {
    return (
      <>
        <RickMortyBackground />
        <Navbar />
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="spinner-border" style={{ width: "4rem", height: "4rem", borderColor: '#00ff41', borderRightColor: 'transparent' }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-4 fs-4 fw-bold" style={{ color: '#00ff41', textShadow: '0 0 10px rgba(0,255,65,0.5)' }}>
              Cargando locaciones...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <RickMortyBackground />
      <Navbar />
      
      <div className="container-fluid min-vh-100 py-5 text-white">
        <div className='row justify-content-center'>
          <div className='col-lg-11 col-xl-10'>
            
            <div className="text-center mb-5">
              <h1 className='display-3 fw-bold mb-2' style={{
                color: '#00ff41',
                textShadow: '0 0 30px rgba(0, 255, 65, 0.8)',
                letterSpacing: '2px'
              }}>
                🌍 Locaciones del Multiverso
              </h1>
              <p className='lead' style={{ color: '#a8dadc' }}>
                {totalPaginas > 0 && `Página ${pagina} de ${totalPaginas} · ${locaciones.length} locaciones`}
              </p>
            </div>
            
            {/* Filtros */}
            <div className="mb-5 p-4 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <div className="mb-4">
                <label className="form-label fw-semibold mb-2" style={{
                  color: '#00ff41',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  letterSpacing: '1px'
                }}>
                  🔍 Buscar Locación
                </label>
                <input 
                  className='form-control form-control-lg' 
                  type='text' 
                  placeholder='Earth, Citadel...'
                  value={busqueda}
                  onChange={(e) => { setBusqueda(e.target.value); setPagina(1); }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(0, 255, 65, 0.3)',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '14px 20px'
                  }}
                />
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{
                    color: '#61dafb',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                  }}>
                    📍 Tipo
                  </label>
                  <input 
                    className='form-control form-control-lg' 
                    type='text' 
                    placeholder='Planet, Space station...'
                    value={tipoSeleccionado}
                    onChange={(e) => { setTipoSeleccionado(e.target.value); setPagina(1); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(97, 218, 251, 0.3)',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '14px 20px'
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold mb-2" style={{
                    color: '#61dafb',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                  }}>
                    🌌 Dimensión
                  </label>
                  <input 
                    className='form-control form-control-lg' 
                    type='text' 
                    placeholder='C-137, Replacement...'
                    value={dimensionSeleccionada}
                    onChange={(e) => { setDimensionSeleccionada(e.target.value); setPagina(1); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(97, 218, 251, 0.3)',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '14px 20px'
                    }}
                  />
                </div>
              </div>

              {(busqueda || tipoSeleccionado || dimensionSeleccionada) && (
                <div className="text-center">
                  <button 
                    onClick={limpiarFiltros}
                    className='btn btn-lg fw-semibold px-5'
                    style={{
                      background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
                    }}
                  >
                    🗑️ Limpiar Filtros
                  </button>
                </div>
              )}
            </div>

            {/* Grid de Locaciones */}
            {locaciones.length > 0 && (
              <div className="row g-4">
                {locaciones.map((locacion) => (
                  <div key={locacion.id} className="col-md-6 col-lg-4">
                    <div className="p-4 rounded-4 h-100" style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(97, 218, 251, 0.1))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 255, 65, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 255, 65, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                    }}>
                      <h3 className="fw-bold mb-3" style={{ color: '#00ff41' }}>
                        {locacion.name}
                      </h3>
                      <p className="mb-2" style={{ color: '#61dafb' }}>
                        <strong>Tipo:</strong> {locacion.type}
                      </p>
                      <p className="mb-2" style={{ color: '#a8dadc' }}>
                        <strong>Dimensión:</strong> {locacion.dimension}
                      </p>
                      <p className="mb-0" style={{ color: '#6c757d' }}>
                        <strong>Residentes:</strong> {locacion.residents.length}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {locaciones.length === 0 && !cargando && (
              <div className="text-center p-5 rounded-4 mx-auto" style={{ 
                maxWidth: '600px',
                background: 'rgba(255, 193, 7, 0.1)',
                border: '2px solid rgba(255, 193, 7, 0.3)'
              }}>
                <h3 className="mb-3" style={{ color: '#ffc107' }}>⚠️ No se encontraron locaciones</h3>
                <p style={{ color: '#a8dadc' }}>Intenta con otros criterios de búsqueda</p>
              </div>
            )}

            {/* Paginación */}
            {locaciones.length > 0 && totalPaginas > 1 && (
              <div className="mt-5 mb-5 d-flex justify-content-center gap-2">
                <button 
                  onClick={() => cambiarPagina(pagina - 1)}
                  disabled={pagina === 1}
                  className="btn btn-lg fw-semibold"
                  style={{
                    background: pagina === 1 ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 30px',
                    color: 'white',
                    opacity: pagina === 1 ? 0.5 : 1
                  }}
                >
                  ← Anterior
                </button>
                
                <div className="d-flex gap-2">
                  {[...Array(Math.min(5, totalPaginas))].map((_, i) => {
                    let pageNum;
                    if (totalPaginas <= 5) pageNum = i + 1;
                    else if (pagina <= 3) pageNum = i + 1;
                    else if (pagina >= totalPaginas - 2) pageNum = totalPaginas - 4 + i;
                    else pageNum = pagina - 2 + i;
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => cambiarPagina(pageNum)}
                        className="btn btn-lg fw-bold"
                        style={{
                          background: pagina === pageNum ? 'linear-gradient(135deg, #00ff41, #39ff14)' : 'rgba(255, 255, 255, 0.1)',
                          border: 'none',
                          borderRadius: '12px',
                          width: '50px',
                          height: '50px',
                          color: pagina === pageNum ? '#000' : 'white',
                          boxShadow: pagina === pageNum ? '0 4px 15px rgba(0, 255, 65, 0.5)' : 'none'
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button 
                  onClick={() => cambiarPagina(pagina + 1)}
                  disabled={pagina === totalPaginas}
                  className="btn btn-lg fw-semibold"
                  style={{
                    background: pagina === totalPaginas ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 30px',
                    color: 'white',
                    opacity: pagina === totalPaginas ? 0.5 : 1
                  }}
                >
                  Siguiente →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locaciones;
import { useState, useEffect } from 'react';
import RickMortyBackground from '../components/RickMortyBackground';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [especieSeleccionada, setEspecieSeleccionada] = useState("");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPersonajes(pagina, busqueda, especieSeleccionada, estadoSeleccionado, generoSeleccionado);
    }, 800);
    return () => clearTimeout(timer);
  }, [busqueda]);

  useEffect(() => {
    fetchPersonajes(pagina, busqueda, especieSeleccionada, estadoSeleccionado, generoSeleccionado);
  }, [pagina, especieSeleccionada, estadoSeleccionado, generoSeleccionado]);

  const fetchPersonajes = async (page, nombre = "", especie = "", estado = "", genero = "") => {
    try {
      setCargando(true);
      let url = `https://rickandmortyapi.com/api/character?page=${page}`;
      
      if (nombre) url += `&name=${nombre}`;
      if (especie) url += `&species=${especie}`;
      if (estado) url += `&status=${estado}`;
      if (genero) url += `&gender=${genero}`;
      
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('No se encontraron personajes');
      
      const data = await response.json();
      setPersonajes(data.results);
      setTotalPaginas(data.info.pages);
      setCargando(false);
    } catch (err) {
      setPersonajes([]);
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
    setEspecieSeleccionada("");
    setEstadoSeleccionado("");
    setGeneroSeleccionado("");
    setPagina(1);
  };

  if (cargando && personajes.length === 0) {
    return (
      <>
        <RickMortyBackground />
        <Navbar />
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="spinner-border" style={{ width: "4rem", height: "4rem", borderColor: '#00ff41', borderRightColor: 'transparent' }} role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-4 fs-4 fw-bold" style={{ color: '#00ff41', textShadow: '0 0 10px rgba(0,255,65,0.5)' }}>
              Cargando personajes del multiverso...
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
            
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className='display-3 fw-bold mb-2' style={{
                color: '#00ff41',
                textShadow: '0 0 30px rgba(0, 255, 65, 0.8)',
                letterSpacing: '2px'
              }}>
                Personajes del Multiverso
              </h1>
              <p className='lead' style={{ color: '#a8dadc' }}>
                {totalPaginas > 0 && `Página ${pagina} de ${totalPaginas} · ${personajes.length} personajes`}
              </p>
            </div>
            
            {/* Panel de filtros */}
            <div className="mb-5 p-4 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              
              {/* Buscador */}
              <div className="mb-4">
                <label htmlFor='inputBusqueda' className="form-label fw-semibold mb-2" style={{
                  color: '#00ff41',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  letterSpacing: '1px'
                }}>
                  🔍 Buscar Personaje
                </label>
                <input 
                  id='inputBusqueda'
                  className='form-control form-control-lg' 
                  type='text' 
                  placeholder='Rick, Morty, Summer...'
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
              
              {/* Filtros */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <label htmlFor='selectEspecie' className="form-label fw-semibold mb-2" style={{
                    color: '#61dafb',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}>
                    🧬 Especie
                  </label>
                  <select 
                    id='selectEspecie'
                    className='form-select form-select-lg'
                    value={especieSeleccionada}
                    onChange={(e) => { setEspecieSeleccionada(e.target.value); setPagina(1); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(97, 218, 251, 0.3)',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '14px 20px'
                    }}
                  >
                    <option value="" style={{ background: '#1a1a2e' }}>Todas</option>
                    <option value="Human" style={{ background: '#1a1a2e' }}>Humano</option>
                    <option value="Alien" style={{ background: '#1a1a2e' }}>Alienígena</option>
                    <option value="Humanoid" style={{ background: '#1a1a2e' }}>Humanoide</option>
                    <option value="Robot" style={{ background: '#1a1a2e' }}>Robot</option>
                    <option value="unknown" style={{ background: '#1a1a2e' }}>Desconocida</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor='selectEstado' className="form-label fw-semibold mb-2" style={{
                    color: '#61dafb',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}>
                    💚 Estado
                  </label>
                  <select 
                    id='selectEstado'
                    className='form-select form-select-lg'
                    value={estadoSeleccionado}
                    onChange={(e) => { setEstadoSeleccionado(e.target.value); setPagina(1); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(97, 218, 251, 0.3)',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '14px 20px'
                    }}
                  >
                    <option value="" style={{ background: '#1a1a2e' }}>Todos</option>
                    <option value="Alive" style={{ background: '#1a1a2e' }}>Vivo</option>
                    <option value="Dead" style={{ background: '#1a1a2e' }}>Muerto</option>
                    <option value="unknown" style={{ background: '#1a1a2e' }}>Desconocido</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor='selectGenero' className="form-label fw-semibold mb-2" style={{
                    color: '#61dafb',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}>
                    ⚧️ Género
                  </label>
                  <select 
                    id='selectGenero'
                    className='form-select form-select-lg'
                    value={generoSeleccionado}
                    onChange={(e) => { setGeneroSeleccionado(e.target.value); setPagina(1); }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(97, 218, 251, 0.3)',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '14px 20px'
                    }}
                  >
                    <option value="" style={{ background: '#1a1a2e' }}>Todos</option>
                    <option value="Male" style={{ background: '#1a1a2e' }}>Masculino</option>
                    <option value="Female" style={{ background: '#1a1a2e' }}>Femenino</option>
                    <option value="Genderless" style={{ background: '#1a1a2e' }}>Sin género</option>
                    <option value="unknown" style={{ background: '#1a1a2e' }}>Desconocido</option>
                  </select>
                </div>
              </div>
              
              {/* Botón limpiar */}
              {(busqueda || especieSeleccionada || estadoSeleccionado || generoSeleccionado) && (
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

            {/* Grid de Personajes */}
            {personajes.length > 0 && (
              <div className="row justify-content-center">
                {personajes.map((personaje) => (
                  <Card key={personaje.id} personaje={personaje} />
                ))}
              </div>
            )}

            {/* Sin resultados */}
            {personajes.length === 0 && !cargando && (
              <div className="text-center p-5 rounded-4 mx-auto" style={{ 
                maxWidth: '600px',
                background: 'rgba(255, 193, 7, 0.1)',
                border: '2px solid rgba(255, 193, 7, 0.3)'
              }}>
                <h3 className="mb-3" style={{ color: '#ffc107' }}>⚠️ No se encontraron personajes</h3>
                <p style={{ color: '#a8dadc' }}>Intenta con otros criterios de búsqueda</p>
              </div>
            )}

            {/* Paginación */}
            {personajes.length > 0 && totalPaginas > 1 && (
              <div className="mt-5 mb-5">
                <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-4">
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
                      cursor: pagina === 1 ? 'not-allowed' : 'pointer',
                      minWidth: '120px',
                      opacity: pagina === 1 ? 0.5 : 1
                    }}
                  >
                    ← Anterior
                  </button>
                  
                  <div className="d-flex gap-2 flex-wrap">
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
                            border: pagina === pageNum ? 'none' : '2px solid rgba(255, 255, 255, 0.2)',
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
                      cursor: pagina === totalPaginas ? 'not-allowed' : 'pointer',
                      minWidth: '120px',
                      opacity: pagina === totalPaginas ? 0.5 : 1
                    }}
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Personajes;
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import RickMortyBackground from '../components/RickMortyBackground';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);

  const validaciones = {
    email: {
      required: "El email es necesario",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email inválido"
      }
    },
    password: {
      required: "La contraseña es necesaria",
      minLength: {
        value: 8,
        message: "La contraseña debe tener al menos 6 caracteres"
      }
    }
  };

  const onSubmit = async (data) => {
    setCargando(true);
    
    const resultado = login(data.email, data.password);
    
    setCargando(false);

    if (resultado.success) {
      await Swal.fire({
        icon: 'success',
        title: '¡Bienvenido de vuelta!',
        text: 'Acceso al multiverso concedido',
        background: '#1a0933',
        color: '#fff',
        confirmButtonColor: '#00ff41',
        timer: 1500,
        showConfirmButton: false
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: resultado.message,
        background: '#1a0933',
        color: '#fff',
        confirmButtonColor: '#ff0000'
      });
    }
  };

  return (
    <>
      <RickMortyBackground />
      
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className="row justify-content-center w-100">
          <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            
            <div className="text-center mb-4">
              <h1 className="display-4 fw-bold mb-2" style={{
                color: '#00ff41',
                textShadow: '0 0 20px rgba(0, 255, 65, 0.6)'
              }}>
                Portal Login
              </h1>
              <p style={{ color: '#a8dadc' }}>Accede al multiverso</p>
            </div>

            <div className="p-4 p-sm-5 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.5)'
            }}>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#61dafb' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="rick@citadel.com"
                    {...register('email', validaciones.email)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.email ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px'
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger d-block mt-1">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Contraseña */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#61dafb' }}>
                    Contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={mostrarPassword ? "text" : "password"}
                      className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="••••••••"
                      {...register('password', validaciones.password)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: `2px solid ${errors.password ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                        color: 'white',
                        borderRadius: '12px',
                        paddingRight: '45px'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#61dafb',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      {mostrarPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {errors.password && (
                    <small className="text-danger d-block mt-1">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                {/* Recordar y Olvidaste contraseña */}
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="recordar"
                      {...register('recordar')}
                      style={{
                        cursor: 'pointer'
                      }}
                    />
                    <label className="form-check-label" htmlFor="recordar" style={{ color: '#a8dadc', fontSize: '0.9rem', cursor: 'pointer' }}>
                      Recordarme
                    </label>
                  </div>
                  <Link to="#" style={{ color: '#00ff41', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={cargando}
                  className="btn btn-lg w-100 fw-bold mb-3"
                  style={{
                    background: cargando ? 'rgba(0, 255, 65, 0.5)' : 'linear-gradient(135deg, #00ff41, #39ff14)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#000',
                    padding: '14px',
                    boxShadow: '0 8px 25px rgba(0, 255, 65, 0.4)',
                    cursor: cargando ? 'not-allowed' : 'pointer'
                  }}
                >
                  {cargando ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>

                <div className="text-center">
                  <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                    ¿No tienes cuenta?{' '}
                    <Link to="/registro" style={{ color: '#00ff41', textDecoration: 'none', fontWeight: 'bold' }}>
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </form>

            </div>

            <div className="text-center mt-4">
              <Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>
                ← Volver al inicio
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import RickMortyBackground from '../components/RickMortyBackground';
import { AuthContext } from '../context/AuthContext';

const Registro = () => {
  const { registrar } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [cargando, setCargando] = useState(false);

  const validaciones = {
    nombre: {
      required: "El nombre es obligatorio",
      pattern: {
        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        message: "El nombre solo puede contener letras"
      },
      minLength: {
        value: 2,
        message: "El nombre debe tener al menos 2 caracteres"
      }
    },
    apellido: {
      required: "El apellido es obligatorio",
      pattern: {
        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        message: "El apellido solo puede contener letras"
      },
      minLength: {
        value: 2,
        message: "El apellido debe tener al menos 2 caracteres"
      }
    },
    email: {
      required: "El correo electrónico es obligatorio",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Correo electrónico inválido"
      }
    },
    usuario: {
      required: "El nombre de usuario es obligatorio",
      pattern: {
        value: /^[a-zA-Z0-9_]+$/,
        message: "Solo letras, números y guiones bajos"
      },
      minLength: {
        value: 4,
        message: "Mínimo 4 caracteres"
      },
      maxLength: {
        value: 20,
        message: "Máximo 20 caracteres"
      }
    },
    password: {
      required: "La contraseña es obligatoria",
      minLength: {
        value: 6,
        message: "Mínimo 6 caracteres"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        message: "Debe contener mayúscula, minúscula y número"
      }
    },
    confirmarPassword: {
      required: "Confirma tu contraseña",
      validate: (value) => value === watch('password') || "Las contraseñas no coinciden"
    }
  };

  const onSubmit = async (data) => {
    setCargando(true);
    
    const resultado = registrar(data);
    
    setCargando(false);

    if (resultado.success) {
      await Swal.fire({
        icon: 'success',
        title: '¡Bienvenido al Multiverso!',
        text: `${data.nombre}, tu cuenta ha sido creada exitosamente`,
        background: '#1a0933',
        color: '#fff',
        confirmButtonColor: '#00ff41',
        confirmButtonText: 'Explorar',
        timer: 2000
      });
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
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
          <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            
            <div className="text-center mb-4">
              <h1 className="display-4 fw-bold mb-2" style={{
                color: '#00ff41',
                textShadow: '0 0 20px rgba(0, 255, 65, 0.6)'
              }}>
                Portal de Registro
              </h1>
              <p style={{ color: '#a8dadc' }}>Crea tu cuenta en el multiverso</p>
            </div>

            <div className="p-4 p-sm-5 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.5)'
            }}>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    placeholder="Rick"
                    {...register('nombre', validaciones.nombre)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.nombre ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                  {errors.nombre && (
                    <small className="text-danger d-block mt-1">{errors.nombre.message}</small>
                  )}
                </div>

                {/* Apellido */}
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Apellido
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                    id="apellido"
                    placeholder="Sanchez"
                    {...register('apellido', validaciones.apellido)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.apellido ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                  {errors.apellido && (
                    <small className="text-danger d-block mt-1">{errors.apellido.message}</small>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="rick@citadel.com"
                    {...register('email', validaciones.email)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.email ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                  {errors.email && (
                    <small className="text-danger d-block mt-1">{errors.email.message}</small>
                  )}
                </div>

                {/* Usuario */}
                <div className="mb-3">
                  <label htmlFor="usuario" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.usuario ? 'is-invalid' : ''}`}
                    id="usuario"
                    placeholder="rick_c137"
                    {...register('usuario', validaciones.usuario)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.usuario ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                  {errors.usuario && (
                    <small className="text-danger d-block mt-1">{errors.usuario.message}</small>
                  )}
                </div>

                {/* Contraseña */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Contraseña
                  </label>
                  <div className="position-relative">
                    <input
                      type={mostrarPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="••••••••"
                      {...register('password', validaciones.password)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: `2px solid ${errors.password ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                        color: 'white',
                        borderRadius: '12px',
                        padding: '12px 16px',
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
                    <small className="text-danger d-block mt-1">{errors.password.message}</small>
                  )}
                </div>

                {/* Confirmar Contraseña */}
                <div className="mb-4">
                  <label htmlFor="confirmarPassword" className="form-label fw-semibold" style={{ color: '#61dafb', fontSize: '0.9rem' }}>
                    Confirmar Contraseña
                  </label>
                  <input
                    type={mostrarPassword ? "text" : "password"}
                    className={`form-control ${errors.confirmarPassword ? 'is-invalid' : ''}`}
                    id="confirmarPassword"
                    placeholder="••••••••"
                    {...register('confirmarPassword', validaciones.confirmarPassword)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${errors.confirmarPassword ? '#dc3545' : 'rgba(97, 218, 251, 0.3)'}`,
                      color: 'white',
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                  {errors.confirmarPassword && (
                    <small className="text-danger d-block mt-1">{errors.confirmarPassword.message}</small>
                  )}
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
                  {cargando ? 'Registrando...' : 'Crear Cuenta'}
                </button>

                <div className="text-center">
                  <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/login" style={{ color: '#00ff41', textDecoration: 'none', fontWeight: 'bold' }}>
                      Inicia sesión aquí
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

export default Registro;
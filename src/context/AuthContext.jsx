import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar usuario al iniciar
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
    setCargando(false);
  }, []);

  // Registrar usuario
  const registrar = (datosUsuario) => {
    try {
      // Obtener usuarios existentes
      const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
      
      // Verificar si el usuario o email ya existe
      const usuarioExiste = usuariosGuardados.find(
        u => u.usuario === datosUsuario.usuario || u.email === datosUsuario.email
      );
      
      if (usuarioExiste) {
        return { 
          success: false, 
          message: usuarioExiste.usuario === datosUsuario.usuario 
            ? 'El nombre de usuario ya está en uso' 
            : 'El correo electrónico ya está registrado'
        };
      }

      // Crear nuevo usuario
      const nuevoUsuario = {
        id: Date.now(),
        nombre: datosUsuario.nombre,
        apellido: datosUsuario.apellido,
        email: datosUsuario.email,
        usuario: datosUsuario.usuario,
        password: datosUsuario.password,
        fechaRegistro: new Date().toISOString()
      };

      // Guardar en array de usuarios
      usuariosGuardados.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

      // Auto-login después del registro
      const usuarioSinPassword = { ...nuevoUsuario };
      delete usuarioSinPassword.password;
      
      setUsuario(usuarioSinPassword);
      localStorage.setItem('usuario', JSON.stringify(usuarioSinPassword));

      return { success: true, message: 'Usuario registrado exitosamente' };
    } catch (error) {
      return { success: false, message: 'Error al registrar usuario' };
    }
  };

  // Iniciar sesión
  const login = (email, password) => {
    try {
      const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
      
      const usuarioEncontrado = usuariosGuardados.find(
        u => u.email === email && u.password === password
      );

      if (usuarioEncontrado) {
        const usuarioSinPassword = { ...usuarioEncontrado };
        delete usuarioSinPassword.password;
        
        setUsuario(usuarioSinPassword);
        localStorage.setItem('usuario', JSON.stringify(usuarioSinPassword));
        
        return { success: true, message: 'Inicio de sesión exitoso' };
      } else {
        return { success: false, message: 'Credenciales incorrectas' };
      }
    } catch (error) {
      return { success: false, message: 'Error al iniciar sesión' };
    }
  };

  // Cerrar sesión
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  const value = {
    usuario,
    cargando,
    registrar,
    login,
    logout,
    estaAutenticado: !!usuario
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
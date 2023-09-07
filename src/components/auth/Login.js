import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setToken }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Simula la lógica de inicio de sesión aquí
    if (username === 'admin' && password === 'admin') {
      const token = 'Bearer';
      localStorage.setItem('token', token); // Almacena el token en el almacenamiento local
      setToken(token); // Actualiza el token en el estado
      history.push('/posts'); // Redirige a la página de Posts después del inicio de sesión exitoso.
    } else {
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;

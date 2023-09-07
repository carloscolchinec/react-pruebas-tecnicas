import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirige a la página de inicio de sesión si no está autenticado
      history.push('/login');
    }
  }, [history]);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    // Redirige a la página de inicio de sesión
    history.push('/login');
    window.location.reload();
  };

  const closeMenu = () => {
    // Cierra el menú al hacer clic en un enlace del menú
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <Link to="/posts" className="text-white text-xl font-semibold" onClick={closeMenu}>
          Mi Aplicación
        </Link>
        <div>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="mt-4 lg:mt-0 lg:flex space-x-4">
          <li>
            <Link
              to="/posts"
              className="text-white block hover:text-blue-300 transition duration-300"
              onClick={closeMenu}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              to="/post-destacados"
              className="text-white block hover:text-blue-300 transition duration-300"
              onClick={closeMenu}
            >
              Post Destacados
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white block hover:text-blue-300 transition duration-300"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

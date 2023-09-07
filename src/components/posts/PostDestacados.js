import React, { useState, useEffect } from 'react';

const PostDestacados = () => {
  const [destacados, setDestacados] = useState([]);
  const [postSeleccionado, setPostSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  useEffect(() => {
    const storedDestacados = JSON.parse(localStorage.getItem('destacados'));
    if (storedDestacados) {
      setDestacados(storedDestacados);
    }
  }, []);

  const eliminarDestacado = (postId) => {
    const newDestacados = destacados.filter((post) => post.id !== postId);
    setDestacados(newDestacados);
    localStorage.setItem('destacados', JSON.stringify(newDestacados));
  };

  const mostrarDetallesPost = (post) => {
    setPostSeleccionado(post);
    setMostrarDetalles(true);
  };

  const cerrarDetalles = () => {
    setMostrarDetalles(false);
    setPostSeleccionado(null);
  };

  return (
    <div className='mx-auto container p-3'>
      <h1 className="text-2xl font-semibold mb-4">Posts Destacados</h1>
      {destacados.length === 0 ? (
        <p>No hay posts agregados a destacados.</p>
      ) : (
        destacados.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <p className="text-xl font-semibold mb-2">{post.title}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => eliminarDestacado(post.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
              >
                Eliminar
              </button>
              <button
                onClick={() => mostrarDetallesPost(post)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))
      )}

      {mostrarDetalles && postSeleccionado && (
        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
          <h2 className="text-2xl font-semibold mb-2">Detalles del Post</h2>
          <p>ID: {postSeleccionado.id}</p>
          <p>Título: {postSeleccionado.title}</p>
          <p>Cuerpo: {postSeleccionado.body}</p>
          <button
            onClick={cerrarDetalles}
            className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
          >
            Cerrar Detalles
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDestacados;

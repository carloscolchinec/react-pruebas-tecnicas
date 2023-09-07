import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Posts = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));

    const storedDestacados = JSON.parse(localStorage.getItem('destacados'));
    if (storedDestacados) {
      setDestacados(storedDestacados);
      setLoadedFromLocalStorage(true);
    }
  }, [history]);

  const isDestacado = (postId) => destacados.some((p) => p.id === postId);

  const toggleDestacado = (postId) => {
    if (isDestacado(postId)) {
      // El post ya está en destacados, quítalo.
      const newDestacados = destacados.filter((p) => p.id !== postId);
      setDestacados(newDestacados);
      localStorage.setItem('destacados', JSON.stringify(newDestacados));
    } else {
      // El post no está en destacados, agrégalo.
      const post = posts.find((p) => p.id === postId);
      if (post) {
        const newDestacados = [...destacados, post];
        setDestacados(newDestacados);
        localStorage.setItem('destacados', JSON.stringify(newDestacados));
      }
    }
  };

  return (
    <div className='container mx-auto p-3'>
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <p className="text-xl font-semibold mb-2">{post.title}</p>
          <p className="text-gray-600">{post.body}</p>
          <div className="mt-4">
            <button
              onClick={() => toggleDestacado(post.id)}
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring ${
                isDestacado(post.id)
                  ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-200'
                  : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200'
              }`}
            >
              {isDestacado(post.id) ? 'Eliminar de Destacados' : 'Agregar a Destacados'}
            </button>
          </div>
        </div>
      ))}
      {!loadedFromLocalStorage && <p>Cargando...</p>}
    </div>
  );
};

export default Posts;

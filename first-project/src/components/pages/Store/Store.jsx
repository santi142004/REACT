import React, { useEffect, useState } from 'react';

async function getProduct() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export const Store = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProduct();
      setProductos(products);
    }

    fetchProducts();
  }, []);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const nuevoCarrito = carrito.map((item) => {
        if (item.id === producto.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <section className='Shop w-full flex flex-col justify-center'>
      <div className='Carrito border-4 border-sky-600 mt-5 py-5 pl-3 w-5/12'>
        <div className='flex place-items-center justify-around pb-5'>
          <h2 className='text-cyan-300'>Carrito de Compras</h2>
          <button className='bg-red-600 text-white p-2 mt-2' onClick={() => setCarrito([])}>
            Vaciar Carrito
          </button>
        </div>
        <ul className='flex flex-col text-white'>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.title} (Cantidad: {item.cantidad})
              <button
                className='bg-red-600 text-white p-2 ml-2'
                onClick={() => eliminarDelCarrito(item)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='ProductosContainer flex flex-wrap justify-center'>
        {productos.map((el, index) => (
          <div
            className='w-96 h-96 bg-slate-600 mt-8 rounded-2xl flex flex-col items-center text-lg text-white m-20'
            key={index}
          >
            <img
              className='w-full h-1/2 rounded-t-2xl object-cover'
              src={el.image}
              alt='lion'
            />
            <div className='w-full h-24  font-bold flex justify-between items-center text-lg px-4'>
              <p>{el.title}</p>
            </div>
            <button
              className='border-4 p-2 border-blue-800 bg-blue-800 hover:bg-blue-500'
              onClick={() => agregarAlCarrito(el)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

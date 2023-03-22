import React from 'react';
import Producto from './producto';

function Catalogo(props) {
  return (
    <div>
      <h1>Catálogo de productos</h1>
      {props.productos.map((producto) => (
        <Producto
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
}

export default Catalogo;
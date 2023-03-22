import React from 'react';
import './index.css'
function Producto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <p>Precio: {props.precio}</p>
      <img src={props.imagen} alt="Producto" id='producto'></img>
    </div>
  );
}

export default Producto;
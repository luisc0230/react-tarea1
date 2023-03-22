import logo from './logo.svg';
import './App.css';
import Catalogo from './catalogo.js';
import imageProd from './img/vocal.jpg'

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    precio: 10.99,
    imagen : imageProd,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2',
    precio: 19.99,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3',
    precio: 5.99,
  },
];

function App() {
  return (
    <div>
      <Catalogo productos={productos} />
    </div>
  );
}

export default App;
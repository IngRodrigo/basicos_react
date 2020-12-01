import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos'
import Carrito from './components/Carrito'


/*
function App() {
  return (
    <div className="App">
    <Header />
    <Footer />
    </div>
  );
}*/

const App=()=>{
//crear listado de productos 
const [productos, setProductos]= useState([
  {id:1, nombre:'Camisa ReactJs', precio: 50},
  {id:2, nombre:'Camisa VueJs', precio: 30},
  {id:3, nombre:'Camisa Angular', precio: 20},
  {id:4, nombre:'Camisa NodeJs', precio: 100},
]);

//state para carrito de compras
const [articulos, agregarArticulo]=useState([]);


  //obtener fecha 
  const fecha = new Date().getFullYear();
  
  return(
    <>
       <Header
      titulo='Tienda virtual'
      />
      <h1>Lista de productos</h1>
    
      {productos.map(producto=>(
        <Productos 
        key={producto.id}
        producto={producto}
        productos={productos}
        articulos={articulos}
        agregarArticulo={agregarArticulo}
        />
      ))}
      <Carrito 
      key={articulos.id}
      articulos={articulos}
      agregarArticulo={agregarArticulo}
      />
      <Footer
      fecha={fecha}
      / >
    </>

  );
}

export default App;

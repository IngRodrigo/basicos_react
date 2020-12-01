import React from 'react';
import Producto from './Productos';

import './Carrito.css';


const Carrito = ({articulos, agregarArticulo, productos}) =>( 
    <div className="carrito">
        <h2>Tu Carrito de compras</h2>
        {articulos.length===0
        ?
        <p>No hay productos en el carrito</p>
        :
            articulos.map((producto)=>(
                <Producto
                key={producto.id}
                producto={producto}
                articulos={articulos}
                agregarArticulo={agregarArticulo}
                />
            ))
        }
    </div>
 )
 
export default Carrito;
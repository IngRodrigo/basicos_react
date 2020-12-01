import React, { Fragment } from 'react';


//sfc sniped 
const Productos = ({producto, articulos, agregarArticulo, productos}) => {
    const {nombre, precio, id}= producto

    
    const SeleccionarProducto=(id)=>{
        const producto=productos.filter((producto)=>producto.id===id)[0];
        agregarArticulo([
            ...articulos,
            producto
        ]);
    }

    //eliminar producto de carrito
    const elminarProducto=(id)=>{
        const producto=articulos.filter(producto=>producto.id!==id);
        console.log(producto);
        agregarArticulo(producto);
    }
    return ( 
        <Fragment>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
            ?
            <button 
            onClick={()=>SeleccionarProducto(id)}>
               Comprar 
            </button>
            :
            <button 
            onClick={()=>elminarProducto(id)}
            >
               Eliminar 
            </button>
            }
        </Fragment>
     );
}
 
export default Productos;
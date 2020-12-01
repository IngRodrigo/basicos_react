import React from 'react';
import App from '../App';

/*
function Header(){
    const edad=16;
    let mensaje;
    if(edad>=18){
mensaje="Eres mayor de edad";
    }else{
mensaje="Eres menor de edad";
    }
    return (
        <h1>{mensaje}</h1>
    );
}*/

function Header({titulo}){
    return(
        <h1 id="encabezado" className ="encabezado">{titulo}</h1>
    );
}

export default Header;
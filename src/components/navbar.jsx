import React from 'react';

const Navbar = (props) => {
    const {nombre = 'Ubits'} = props

    const verNombre = () =>{
        return nombre
    }

    return (
        <>
            Este es el Navbar de {verNombre()}
        </>
    )
};

export default Navbar;
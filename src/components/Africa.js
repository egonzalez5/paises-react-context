import React, { useContext, useEffect, useState } from 'react'
import ListadoPaises from './ListadoPaises';
import { PaisContext } from './PaisContext';


const Africa = () => {

    const {setBusqueda, setConsultar, setSearch } = useContext(PaisContext);
    

    const newContinente = {continente: 'africa'};
    

    useEffect(() => { 
        
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde Africa</h1>
            <input
                type="text"
                placeholder="buscar..."
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
            <ListadoPaises />
        </div>
    )
}

export default Africa

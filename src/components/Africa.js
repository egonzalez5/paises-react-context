import React, { useContext, useEffect } from 'react'
import ListadoPaises from './ListadoPaises';
import { PaisContext } from './PaisContext';


const Africa = () => {

    const {setBusqueda, setConsultar, setSearch} = useContext(PaisContext);
    

    const newContinente = {continente: 'africa'};
    

    useEffect(() => { 
        setSearch("");
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde Africa</h1>
            <ListadoPaises />
        </div>
    )
}

export default Africa

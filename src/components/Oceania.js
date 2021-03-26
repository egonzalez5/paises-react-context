import React, { useContext, useEffect } from 'react'
import { PaisContext } from './PaisContext';
import ListadoPaises from './ListadoPaises';

const Oceania = () => {

    const {setBusqueda, setConsultar, setSearch } = useContext(PaisContext);


    
    const newContinente = {continente: 'Oceania'};
    

    useEffect(() => { 
        setSearch("");
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde Oceania</h1>
            <ListadoPaises />
        </div>
    )
}

export default Oceania
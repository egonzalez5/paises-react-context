import React, { useContext, useEffect } from 'react'
import { PaisContext } from './PaisContext';
import ListadoPaises from './ListadoPaises';

const Europa = () => {

    const {setBusqueda, setConsultar, setSearch } = useContext(PaisContext);


    
    const newContinente = {continente: 'europe'};
    

    useEffect(() => {
        setSearch("");
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde Europa</h1>
            <ListadoPaises />
        </div>
    )
}

export default Europa
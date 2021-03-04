import React, { useContext, useEffect } from 'react'
import { PaisContext } from './PaisContext';
import ListadoPaises from './ListadoPaises';

const Asia = () => {

    const {setBusqueda, setConsultar } = useContext(PaisContext);


    
    const newContinente = {continente: 'asia'};
    

    useEffect(() => { 
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde Asia</h1>
            <ListadoPaises />
        </div>
    )
}

export default Asia

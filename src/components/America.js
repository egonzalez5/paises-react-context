import React, { useContext, useEffect } from 'react'
import { PaisContext } from './PaisContext';
import ListadoPaises from './ListadoPaises';
const America = () => {

    const {setBusqueda, setConsultar } = useContext(PaisContext);


    
    const newContinente = {continente: 'americas'};
    

    useEffect(() => { 
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div>
            <h1>Desde America</h1>
            <ListadoPaises />
        </div>
    )
}

export default America
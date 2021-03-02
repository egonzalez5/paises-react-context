import React, { useContext, useEffect} from 'react'
import { PaisContext } from './PaisContext';

const Africa = () => {

    const {busqueda, setBusqueda, setConsultar} = useContext( PaisContext );

    

    useEffect(() => {
        //setBusqueda('africa')
        setBusqueda('africa');
        
    }, [])
    console.log(busqueda);
    
    return (
        <div>
            <h1>Desde Africa</h1>
        </div>
    )
}

export default Africa

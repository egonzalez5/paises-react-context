import React, { useContext, useState } from 'react'
import { PaisContext } from './PaisContext';
import Pais from './Pais';


const ListadoPaises = () => {

    const {consultaPais, search, setSearch } = useContext(PaisContext);
    
    /* return ( 
        <div className="col-12 p-5 row">
            {consultaPais.map(pais => (
                <Pais
                    key={pais.numericCode}
                    pais={pais}
                />
            ))}
        </div>
     ); */
     return ( 
        <div className="col-12 p-5 row">
            {consultaPais.filter((pais) => {
                if(search === "") {
                    return pais
                }else if (pais.name.toLowerCase().includes(search.toLowerCase())) {
                    return pais
                }
            }).map(pais => (
                <Pais
                    key={pais.numericCode}
                    pais={pais}
                />
            ))}
        </div>
     );
}
 
export default ListadoPaises;
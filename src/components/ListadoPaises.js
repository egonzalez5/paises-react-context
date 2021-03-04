import React, { useContext } from 'react'
import { PaisContext } from './PaisContext';
import Pais from './Pais';


const ListadoPaises = () => {

    const {consultaPais } = useContext(PaisContext);

    return ( 
        <div className="col-12 p-5 row">
            {consultaPais.map(pais => (
                <Pais
                    key={pais.numericCode}
                    pais={pais}
                />
            ))}
        </div>
     );
}
 
export default ListadoPaises;
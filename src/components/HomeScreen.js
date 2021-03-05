import React, { useContext, useEffect } from 'react'
import { PaisContext } from './PaisContext';
import ListadoPaises from './ListadoPaises';
import { Formulario } from './Formulario';


const HomeScreen = () => {

    const {setBusqueda, setConsultar, setSearch  } = useContext(PaisContext);


    
    const newContinente = {continente: 'americas'};
    

    useEffect(() => { 
        setBusqueda(newContinente);
        setConsultar(true);
    // eslint-disable-next-line 
    }, [])

    
    
    return (
        <div className="row justify-content-around">
            <h1>Buscador</h1>
            <div className="col-md-4">
                <Formulario />
            </div>

            <div className="col-md-3">
            <form className="form-inline my-2 my-lg-0 ">
            <input
                className="form-control mr-sm-2"
                type="search"
                aria-label="Search"
                placeholder="Buscar..."
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
            </form>
            </div>
            
            <ListadoPaises />
        </div>
    )
}

export default HomeScreen
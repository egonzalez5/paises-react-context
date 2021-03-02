import React, { useState, useEffect } from 'react'
import { AppRouter } from './components/AppRouter'
import { PaisContext } from './components/PaisContext'
import axios from 'axios'

function App() {

  const [consultaPais, setConsultaPais] = useState([]);
  const [busqueda, setBusqueda] = useState({ continente:'',  });
  const [consultar, setConsultar] = useState(false);
  
  //const {continente} = busqueda;

  useEffect(() => {

    const consultarAPI = async () => {

      if(consultar){
      //const url = 'https://restcountries.eu/rest/v2/all';
      const url =  `https://restcountries.eu/rest/v2/region/americas`;
      //const url =  `https://restcountries.eu/rest/v2/region/${continente}`;
      const resultado = await axios.get(url);
      
      //setConsultaPais(consultaPais.data);
      setConsultaPais(resultado.data);
      setConsultar(false);

      console.log(resultado.data);
      console.log(busqueda);

    
  }
}
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar])

    return (
        <PaisContext.Provider value={{

            consultaPais,
            busqueda,
            setBusqueda,
            setConsultar,
            
        }}>

            <AppRouter />

        </PaisContext.Provider>
    )
}

export default App;

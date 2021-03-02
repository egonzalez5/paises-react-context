import React, { useContext } from 'react'
import { PaisContext } from './PaisContext';
//import axios from 'axios';

export const HomeScreen = () => {

    //const { user } = useContext(UserContext);
    const { consultaPais } = useContext(PaisContext);
    
    console.log(consultaPais)

    //console.log( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            
            
        </div>
    )
}

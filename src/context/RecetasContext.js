import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [ consultar, guardarConsultar] = useState(false);
    const [ inputVacio, guardarinputVacio] = useState(false);

    const { nombre, categoria} = busqueda;

    useEffect(() => {
        if(consultar) {
            const obtenerRecetas = async () => {
                if(categoria.length !== 0)
                {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

                    const resultado = await axios.get(url);
    
                    console.log("Se encontraron estas recetas")
                    console.log(resultado.data.drinks)

                    guardarRecetas(resultado.data.drinks);
                    guardarinputVacio(false)
                }
                else
                {
                    guardarinputVacio(true)
                }
            }

            obtenerRecetas();
        }
    }, [busqueda]);

    return ( 
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas, 
                guardarConsultar,
                inputVacio
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;
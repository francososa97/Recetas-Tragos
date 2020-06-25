import React, { useContext} from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from './Modal';

const Receta = ({receta}) => {


    // extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);
    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                 <h2 className="card-header">{receta.strDrink}</h2>

                 <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className="card-body"
                    onClick={() => {guardarIdReceta(receta.idDrink);
                                    }}
                    onClose={() => {guardarIdReceta(null);
                                    guardarReceta({})
                                    }}
                >
                    <Modal informacion={informacion}/>
                 </div>
            </div>
        </div>
     );
}

 
export default Receta;
//<Modal informacion={informacion}/>


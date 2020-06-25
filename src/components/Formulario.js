import React, { useContext, useState, Fragment } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
import Error from './Error';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext );
    const { inputVacio} = useContext(RecetasContext );

    // función para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <Fragment>
            <form
                className="col-12"
                onSubmit={ e => {
                    e.preventDefault();
                    buscarRecetas(busqueda);
                    guardarConsultar(true);
                }}
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por Categoría o Ingrediente</legend>
                </fieldset>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Ingrediente"
                            onChange={obtenerDatosReceta}
                        />
                    </div>
                    <div className="col-md-4">
                        <select 
                            className="form-control"
                            name="categoria"
                            onChange={obtenerDatosReceta}
                        >
                            <option value="">-- Selecciona Categoría --</option>
                            {categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory} 
                                    value={categoria.strCategory} 
                                >{categoria.strCategory}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="buscar btn btn-block "
                            value="Buscar Bebidas"
                        />
                    </div>
                </div>
            </form>
            <div className="col-12">
                {inputVacio ? <Error/>: null}
            </div>
        </Fragment>

     );
}
 
export default Formulario;
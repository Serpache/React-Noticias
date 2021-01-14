import React from 'react';

import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},

    ];

    //custom hook
    const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

    //submit
    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria);
    }


    //btn-block acceso con corchetes por que el guion esta reservado en la llamada con punto
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}                            
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;
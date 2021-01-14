import React from 'react';

import styles from './Formulario.module.css'


const Formulario = () => {
    //btn-block acceso con corchetes por que el guion esta reservado en la llamada con punto
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
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
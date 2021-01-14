import React, { Fragment, useState, useEffect } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  //states
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      //Clave personal de newsAPI, registrarse para obtener una
      const claveAPI = "";
      //2-letter ISO 3166-1 code of the country
      const codigo = "us";

      const url = `http://newsapi.org/v2/top-headlines?country=${codigo}&category=${categoria}&apiKey=${claveAPI}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
           noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;

/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import useForm from '../../../hocks/useForm';

function CadastroCategoria() {
  // eslint-disable-next-line no-unused-vars
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://imersaoreactaluraclovis.herokuapp.com/';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria :
        {values.titulo}
      </h1>
      <form onSubmit={function handleSubimit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Titulo"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        {/* cargando */}
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categorias) => {
          <li key={`${categorias.titulo}`}>
            {categorias.titulo}
          </li>;
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

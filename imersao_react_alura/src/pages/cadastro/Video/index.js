/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-blocks */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import useForm from '../../../hocks/useForm';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  useEffect(() => {
    categoriasRepository
      .getAll()
    // eslint-disable-next-line no-shadow
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line arrow-body-style
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          // eslint-disable-next-line no-console
          console.log('cadastrou');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do video"
          name="titulo"
          value= {values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value= {values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value= {values.categoria}
          onChange={handleChange}
          suggestions={
            categoryTitle
          }
        />
        <Button type='submit'>
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;

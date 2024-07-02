import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brascubasImg from './assets/bras_cubas.jpeg'
import Capa from './componentes/Capa'
import SeletorCapitulos from './componentes/SeletorCapitulos'
import BotoesControle from './componentes/BotoesControle'

function App() {
  const [taTocando, definirTaTocando] = useState(false)
  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machados de Assis',
    totalCapitulos: 2,
    capa: brascubasImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  }
  return <>
    <Capa 
      imagemCapa = {informacoesLivro.capa} 
      textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={1}/>
      <BotoesControle 
        taTocando={taTocando}
        definirTaTocando={definirTaTocando}
      />
  </>
}

export default App

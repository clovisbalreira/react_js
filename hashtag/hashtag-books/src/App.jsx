import { useState, useRef } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brascubasImg from './assets/bras_cubas.jpeg'
import Capa from './componentes/Capa'
import SeletorCapitulos from './componentes/SeletorCapitulos'
import BotoesControle from './componentes/BotoesControle'
import livro from './assets/capitulos/livro'
import GerenciadorFaixa from './GereciadorFaixa'

function App() {
  const [taTocando, definirTaTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const tagAudio = useRef(null)
  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machados de Assis',
    totalCapitulos: 2,
    capa: brascubasImg,
    capitulos : livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  }

  const tocarFaixa = () => {
    tagAudio.current.play()
    definirTaTocando(true)
  }

  const pausarFaixa = () => {
    tagAudio.current.pause()
    definirTaTocando(false)
  }

  const tocarOuPausarFaixa = () => {
    if(taTocando){
      pausarFaixa()
    }else{
      tocarFaixa()
    }
  }

  return <>
    <Capa 
      imagemCapa = {informacoesLivro.capa} 
      textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={faixaAtual + 1}/>
      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia={tagAudio}/>
      <BotoesControle 
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
    />
  </>
}

export default App

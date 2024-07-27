import { useState, useRef, useEffect } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import brascubasImg from './assets/bras_cubas.jpeg'
import Capa from './componentes/Capa'
import SeletorCapitulos from './componentes/SeletorCapitulos'
import BotoesControle from './componentes/BotoesControle'
import livro from './assets/capitulos/livro'
import GerenciadorFaixa from './GereciadorFaixa'
import ContainerProgresso from './ContainerProgresso'

function App() {
  const [taTocando, definirTaTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const [tempoTotalFaixa, definirTempoTotalFaixa] = useState(0)
  const [tempoAtualFaixa, definirTempoAtualFaixa] = useState(0)
  const tagAudio = useRef(null)

  useEffect(() => {
    if(taTocando){
      tocarFaixa()
    }
  },[
    faixaAtual
  ])

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machados de Assis',
    totalCapitulos: 32,
    capa: brascubasImg,
    capitulos : livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  }

  function tocarFaixa(){
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

  const avancarFaixa = () => {
    if(informacoesLivro.totalCapitulos === faixaAtual + 1){
      definirFaixaAtual(0)
    }else{
      definirFaixaAtual(faixaAtual + 1)
    }
  }

  const retrocederFaixa = () => {
    if(faixaAtual == 0){
      definirFaixaAtual(informacoesLivro.totalCapitulos - 1)
    }else{
      definirFaixaAtual(faixaAtual - 1)
    }
  }

  return <>
    <Capa 
      imagemCapa = {informacoesLivro.capa} 
      textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={faixaAtual + 1}/>
      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia={tagAudio}
      definirTempoTotalFaixa={definirTempoTotalFaixa} definirTempoAtualFaixa={definirTempoAtualFaixa}/>
      <ContainerProgresso tempoTotalFaixa={tempoTotalFaixa} tempoAtualFaixa={tempoAtualFaixa}/>
      <BotoesControle 
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
        avancarFaixa={avancarFaixa}
        retrocederFaixa={retrocederFaixa}
    />
  </>
}

export default App

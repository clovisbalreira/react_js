import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import { Container, Conteudo, Header, Form, Campo, Label, Input, Select, BtnAcessar, HeaderChat, ImgUsuario, NomeUsuario, ChatBox, ConteudoChat, MsgEnviada, DetMsgEnviada, TextoMsgEnviada, MsgRecebida, DetMsgRecebida, TextoMsgRecebida, EnviarMsg, CampoMsg, BtnEnviarMsg, AlertErro, AlertSucesso } from './styles/styles'
import api from './config/configApi'

let socket;

function App() {
  const ENDPOINT = "http://localhost:8080/"
  const [logado, setLogado] = useState(false)
  const [usuarioId, setUsuarioId] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [sala, setSala] = useState("")
  const [salas, setSalas] = useState([])

  const [mensagem, setMensagem] = useState("")
  const [listaMensagem, setListaMensagem] = useState([])
  const [status, setStatus] = useState({
      type: '',
      mensagem: ""
  })

  useEffect(() => {
    socket = socketIOClient(ENDPOINT)
    listarSalas()
  },[])

  useEffect(() => {
    socket.on("receber_mensagem", (dados) => {
      setListaMensagem([...listaMensagem, dados])
    })
  })

  const conectarSala = async e => {
    e.preventDefault()
    console.log(`Acesso a sala ${sala} com o E-mail ${email}`)
    const headers = {
      'Content-Type': 'application/json'
    } 
    
    await api.post('/validar-acesso', { email }, { headers }).then((response) => {
      console.log(response.data.mensagem)
      console.log(response.data.usuario.id)
      console.log(response.data.usuario.nome)
      setNome(response.data.usuario.nome)
      setUsuarioId(response.data.usuario.id)
      setLogado(true)
      socket.emit("sala_conectar", Number(sala))
      listarMensagens()
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'erro',
          mensagem: err.response.data.mensagem
        })
      }else{
        setStatus({
          type: 'erro',
          mensagem: "Erro: Tente mais tarde"
        })
      }
    })
  }

  const listarSalas = async () => {
    await api.get('/listar-sala').then((response) => {
      setSalas(response.data.salas)
      console.log(response.data.salas)
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'erro',
          mensagem: err.response.data.mensagem
        })
      }else{
        setStatus({
          type: 'erro',
          mensagem: "Erro: Tente mais tarde"
        })
      }
    })
  }
  
  const listarMensagens = async () => {
    await api.get('/listar-mensagens/' + sala).then((response) => {
      console.log(response)
      console.log(response.data.mensagens)
      setListaMensagem([...listaMensagem, response.data.mensagens])
      //setListaMensagem(response.data.mensagens)
    }).catch((err) => {
      if(err.response){
        console.log(err.response.data.mensagem)
      }else{
        console.log('Erro')
      }
    })
  }
  
  const enviarMensagem =  async e => {
    e.preventDefault()
    console.log(`Mensagem: ${mensagem}`)
    const conteudoMensagem = {
      sala: Number(sala), conteudo: {
        mensagem,
        usuario:{
          id: usuarioId,
          nome
        }
      }
    }
    console.log(conteudoMensagem)
    await socket.emit("enviar_mensagem", conteudoMensagem)
    setListaMensagem([...listaMensagem, conteudoMensagem.conteudo])
    setMensagem("")
  }

  return (
    <Container>
      {!logado ?
        <Conteudo>
          <Header>Meu Chat sobre...</Header>
            <Form  onSubmit={conectarSala}>
              {status.type === 'erro' ? <AlertErro>{status.mensagem}</AlertErro> : ''}
              <Campo>
                <Label>E-mail: </Label>
                <Input type='text' placeholder='E-mail' name="email" value={email} onChange={(text) => {setEmail(text.target.value)}}/>
              </Campo>              
              <Campo>
                <Label>Sala: </Label>
                <Select name='sala' value={sala} onChange={text => setSala(text.target.value)}>
                  <option value="">Selecionar</option>
                  {salas.map((sala) =>{
                    return (
                      <option value={sala.id} key={sala.id}>{sala.nome}</option>
                    )
                  })}
                </Select>
              </Campo>
              <BtnAcessar>Conectar Sala</BtnAcessar>
            </Form>
          </Conteudo>
          :
          <ConteudoChat>
            <HeaderChat>
              <ImgUsuario src='http://randomuser.me/api/portraits/lego/2.jpg' alt={nome}/>
              <NomeUsuario>{nome}</NomeUsuario>
            </HeaderChat>
            <ChatBox>
              <ScrollToBottom className='scrollMsg'>
                {listaMensagem.map((msg, key) => {
                  return(
                    <div key={key}>
                      {usuarioId === msg.usuario.id ? 
                        <MsgEnviada>
                          <DetMsgEnviada>
                            <TextoMsgEnviada>
                              {msg.usuario.nome} : {msg.mensagem}
                            </TextoMsgEnviada>
                          </DetMsgEnviada>
                        </MsgEnviada>
                      :
                      <MsgRecebida>
                          <DetMsgRecebida>
                            <TextoMsgRecebida>
                            {msg.usuario.nome} : {msg.mensagem}
                            </TextoMsgRecebida>
                          </DetMsgRecebida>
                        </MsgRecebida>
                      }
                    </div>
                  )
                })}
              </ScrollToBottom>
              </ChatBox>
              <EnviarMsg onSubmit={enviarMensagem}>
                <CampoMsg type='text' name='mensagem' placeholder='Mensagem...' value={mensagem} onChange={(text) => {
                setMensagem(text.target.value)
              }}/>
                <BtnEnviarMsg>Enviar</BtnEnviarMsg>
              </EnviarMsg>
          </ConteudoChat>
        }
    </Container>
  );
}

export default App;

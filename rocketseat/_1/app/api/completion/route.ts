import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
export const runtime = 'edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config) 
 
export async function POST(req: Request) {
  const { schema, prompt } = await req.json()

  const message = `
    O seu trabalho é criar queries em SQL a partir de um schema SQL abaixo.
    Schema SQL:
    ***
    ${schema}
    ***

    A partir do schema, escreve uma query SQL a partir da solitação abaixo:
    Me Retorne somente o código SQL. nada alem disso

    Solicitação: ${prompt}
    `.trim()
 
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
        {role: 'user', content: message}
    ]
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
import { Hono } from 'hono'
import { streamText } from 'hono/streaming'

const app = new Hono()

// Simple route example.
app.get('/', (ctx) => {
  return ctx.json({
    message: "Hello, World!",
  })
})

const paragraph = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nullam nec purus et eros facilisis tincidunt
`

const chunkWithOverlap = (text: string, chunkSize: number = 25, overlap: number = 3) => {
  const chunks = []
  for(let i = 0; i < text.length; i += chunkSize - overlap) {
    chunks.push(text.slice(i, i + chunkSize))
  }
  return chunks
}

// Streaming text example.
app.get('/streamText', (c) => {
  const chunks = chunkWithOverlap(paragraph)
  return streamText(c, async (stream) => {
    for (const chunk of chunks) {
      await stream.sleep(1000)
      stream.write(chunk)
    }
    stream.close()
  })
})

export default app

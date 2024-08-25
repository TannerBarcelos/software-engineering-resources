import { Hono } from 'hono'

const app = new Hono()

app.get('/', (ctx) => {
  return ctx.json({
    message: "Hello, World!",
  })
})

export default app

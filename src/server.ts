import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ mensagem: 'Hello World' })
})

app.listen(3333, () => {
  console.log('Server running on port 3333 🚀')
})

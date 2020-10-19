import express from 'express'
import './database/connection'

const app = express()

const usuarios = [
  {name: 'Edipo', idade: 32},
  {name: 'Edipo', idade: 32},
  {name: 'Edipo', idade: 32},
  {name: 'Edipo', idade: 32},
]

app.get('/users', (request, response) => {
  return response.json(usuarios)
})

app.listen(3333)
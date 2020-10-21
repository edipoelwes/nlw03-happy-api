import express from 'express'
import path from 'path'

import './database/connection'
import route from './routes'

const app = express()
app.use(express.json())
app.use(route)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333)



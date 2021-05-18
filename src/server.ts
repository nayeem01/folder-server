import { json } from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import connectDB from './config/db'
import endpoint from './config/endpoints.config'
import folder from './router/folder'
const app = express()
const PORT = endpoint.PORT || 5000

connectDB()
app.use(morgan('dev'))
app.use(json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/api', folder)

app.listen(PORT, () => console.log(`server is runnig on ${PORT}`))

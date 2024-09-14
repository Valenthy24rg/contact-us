import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import formRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/forms', formRoutes)

try {
  db.authenticate()
  console.log('Conexion exitosa a la DB')
} catch (error) {
  console.log(`Error de conexion: ${error}`)
  
}


app.listen(8000, () => {
  console.log('Server Up Running in http://localhost:8000/')
})

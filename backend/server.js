import express from 'express'
import useRouter from './routes/auth.routes.js'
import dotenv from 'dotenv'
import connectMongoDB from './db/connectMongoDB.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app=express()
const port=process.env.port || 5000
dotenv.config()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/api/auth",useRouter)
app.listen(port,()=>{
    console.log(`app is run on the port ${port}`);
  
    connectMongoDB();
})
import express from 'express'
import useRouter from './routes/auth.routes.js'
import dotenv from 'dotenv'
import connectMongoDB from './models/user.model.js'

const app=express()
const port=process.env.port || 5000
dotenv.config()
app.use(express.json())
app.use("/api/auth",useRouter)
app.listen(port,()=>{
    console.log(`app is run on the port ${port}`);
    connectMongoDB()
    
})
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
// import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


const app = express()
const port= 4000

//middleware
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use('/app/user',userRoutes)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get('/',(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})

//mongodb+srv://nimbal2003anish:741852963@cluster0.wzitkyt.mongodb.net/
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))//for json storage
app.use(express.urlencoded({extended:true,limit:"16"}))//for URL encoding
app.use(express.static("public"))//to store any pdf and image in  the local server

app.use(cookieParser())//to store the user cookie into the server 


//routers import 
import userRoutes from "./routes/user.routes.js"



//routers  declatation 

app.use("/api/v1.users",userRoutes)

export {app} 
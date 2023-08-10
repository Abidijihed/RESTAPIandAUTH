const express=require("express")
const cors=require("cors")
const connectDb=require("./configDB/config")
const port = 5800
const {posteRouter}=require("./routers/postesRouter")
const {userRouter}=require("./routers/userRouter")
const app=express()

app.use(express.json())
connectDb()
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}))
app.use("/",posteRouter)
app.use("/",userRouter)
app.listen(port,()=>{
console.log(`server is run on http://localhost:${port}`)
})
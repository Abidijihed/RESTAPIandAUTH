const mongoose=require('mongoose')

const connectDb=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://abidij55:ji31826832@cluster0.8naopmv.mongodb.net/")
        console.log("db is connect")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDb
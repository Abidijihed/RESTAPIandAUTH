const userSchema=require("../models/userModels")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

module.exports={
    CreateUser:(async(req,res)=>{
        const {email,password}=req.body
        try {
            const found=await userSchema.findOne({email})
            if(found){
                res.status(400).send("user exist")
            }else{
                const user=new userSchema(req.body)
                const salt=10
                const hashpass=await bcrypt.hash(password,salt)
                user.password=hashpass
                const payload={id:user._id}
                const token=jwt.sign(payload,'secretkey')
                await user.save()
                res.status(201).send({msg:"user added",user,token})
            }
        } catch (error) {
            res.status(500).send(error)
            
        }
    }),
     Login:(async(req,res)=>{
          const {email,password}=req.body
          try {
            const user=await userSchema.findOne({email})
            if(!user){
                res.status(400).send("user dosn't exist")
            }else{
                //compare password with hashed passowrd
                const compar=bcrypt.compareSync(password,user.password)
                if(!compar){
                    res.status(400).send("wrong password")
                }else{
                    const payload={id:user._id}
                    const token=jwt.sign(payload,'secretkey')
                    res.status(200).send({msg:"login with seccess",token,user})
                }
            }
          } catch (error) {
            res.status(500).send(error)
          }
     })
}
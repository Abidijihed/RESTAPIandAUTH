const Post=require("../models/postesModels")
 
module.exports={
AddPost:async(req,res)=>{
    try {
        const poste=new Post(req.body)
        await poste.save()
        res.status(201).send("poste done")
    } catch (error) {
        res.status(500).send(error)
    }
},
GetPostes: async (req,res)=>{
try {
    const postes=await Post.find()
    res.status(200).send(postes)
} catch (error) {
    res.status(500).send(error)
}
},
UpdatePoste:async(req,res)=>{
try {
    const poste= await Post.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    res.status(202).send("poste updated")
} catch (error) {
    res.status(500).send(error)
}
}, DeletePost: async(req,res)=>{
    try {
        const poste=await Post.findByIdAndDelete(req.params.id)
        res.status(200).send("product deleted")
    } catch (error) {
        res.status(500).send(error)
    }
}
}

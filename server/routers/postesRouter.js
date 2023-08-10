const router=require("express").Router()
const contrellerPost=require("../controllers/postes")

router.post("/api/create_post",contrellerPost.AddPost)
router.get("/api/get_postes",contrellerPost.GetPostes)
router.put("/api/update_poste/:id",contrellerPost.UpdatePoste)
router.delete("/api/delete_postes/:id",contrellerPost.DeletePost)

module.exports={posteRouter:router}
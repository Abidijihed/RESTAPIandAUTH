import axios from "axios"
import  {GET_POSTE} from "../actionType/posteType"


export const Get_postes=()=>async(dispatch)=>{
 try {
    axios.get("http://localhost:5800/api/get_postes")
    .then((res)=>dispatch({type:GET_POSTE,payload:res.data}))
 } catch (error) {
    console.log(error)
 }
}
export const Create_Poste=(data)=>async(dispatch)=>{
    try {
        axios.post('http://localhost:5800/api/create_post',data)
        .then((res)=>{
            if(res.data==="poste done"){
                dispatch(Get_postes())
            }
        })
    } catch (error) {
        console.log(error)
    }
}

    export const Update_Poste=(id,data)=>async(dispatch)=>{
        try {
            axios.put('http://localhost:5800/api/update_poste/'+id,data)
            .then((res)=>{
                if(res.data==="poste updated"){
                    dispatch(Get_postes())
                }
            })
        } catch (error) {
            console.log(error)
        }
}

export const Delete_Poste=(id)=>async(dispatch)=>{
    console.log(id)
    try {
        axios.delete('http://localhost:5800/api/delete_postes/'+id)
        .then((res)=>{
            console.log(res)
            if(res.data==="product deleted"){
                dispatch(Get_postes())
            }
        })
    } catch (error) {
        console.log(error)
    }
}
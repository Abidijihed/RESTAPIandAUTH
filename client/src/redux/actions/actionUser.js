import axios from "axios";

export const Create_user=(data,navigate)=>async(dispatch)=>{
    try {
        axios.post('http://localhost:5800/api/create_user',data)
        .then((res)=>{
            if(res.data.msg==="user added"){
          localStorage.setItem("token",res.data.token)
          navigate("/profile")
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const Login_user=(data,navigate)=>async(dispatch)=>{
    try {
        axios.post('http://localhost:5800/api/login_user',data)
        .then((res)=>{
            if(res.data.msg==="login with seccess"){
                localStorage.setItem('token',res.data.token)
                navigate("/profile")

            }
        })
    } catch (error) {
        console.log(error)
    }
}
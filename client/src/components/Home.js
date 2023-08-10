import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Create_user, Login_user } from '../redux/actions/actionUser';
import { useNavigate } from 'react-router-dom'

function FormTextExample() {
  const navigate=useNavigate()
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const dispatch = useDispatch()
  const [role,setRole]=useState("")
  const handleSubmit=()=>{
   dispatch(Create_user({password,email,role},navigate))
  }
  const handelLogin=()=>{
    dispatch(Login_user({email,password},navigate))
  }
  const [isSwitchChecked, setSwitchChecked] = useState(false);

  return (
    <>


{console.log(isSwitchChecked)}
<Form.Check
        type="switch"
        id="custom-switch"
        label={isSwitchChecked?"Login":"Register"}
        checked={isSwitchChecked}
        onChange={() => setSwitchChecked(!isSwitchChecked)}
      />
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setPassword(e.target.value)}
      />
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
     {!isSwitchChecked&&
     <><Form.Label>User</Form.Label>
      <input type='checkbox' value="user"  checked={role === "user"} onChange={(e)=>setRole(e.target.value)}/>
      <Form.Label>Admin</Form.Label>
      <input type='checkbox' value="admin" checked={role === "admin"}onChange={(e)=>setRole(e.target.value)}/>
      </>
      }
      <button onClick={isSwitchChecked?()=>handelLogin():()=>handleSubmit()} >{isSwitchChecked?"Login":"Register"}</button>
    </>
  );
}

export default FormTextExample;
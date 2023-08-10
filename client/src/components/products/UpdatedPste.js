import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Update_Poste } from '../../redux/actions/actionPoste'
import Form from 'react-bootstrap/Form';

// export default function AddProduct({open,handleClose}) {

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Example({show,handleClose,id,product}) {
        const dispatch=useDispatch()
    const [title,setTitle]=useState(product?.title)
    const [imageselected,setImage]=useState([])
    const [image,setImagee]=useState(product?.image)
    const [description,setdescription]=useState(product?.description)
    const handleSubmit=()=>{
        console.log(id)
         const formaData=new FormData()
         formaData.append("file",imageselected)
         formaData.append("upload_preset", "ml_default")

         if(imageselected.name){
          axios.post("http://api.cloudinary.com/v1_1/dm1xlu8ce/upload",formaData).then((res)=>{
            console.log(res.data)
            dispatch(Update_Poste(id,{title:title,image:res.data.url,description:description}))
        handleClose()
        })
         }
         dispatch(Update_Poste(id,{title:title,image:image,description:description}))
        handleClose()
        
       
        
    }
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control value={title} type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>image</Form.Label>
        <Form.Control type="file" placeholder="image" onChange={(e)=>setImage(e.target.files[0])}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control value={description} type="text" placeholder="description"  onChange={(e)=>setdescription(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
  
import React, { useState } from 'react'
import Products from './Products'
import { Button } from '@mui/material';
import AddProduct from './AddProduct';
export default function ProductList({data}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        {data.map((el)=><Products key={el._id} product={el}/>)}
        <Button onClick={handleShow}>Add Product</Button>
<AddProduct
 show={show}
handleClose={handleClose}
/>
    </div>
  )
}

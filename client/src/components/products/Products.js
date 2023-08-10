import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdatePostee from "./UpdatedPste"
import { Delete_Poste } from '../../redux/actions/actionPoste';
import { useDispatch } from 'react-redux';
export default function MediaCard({product}) {
  const dispatch=useDispatch()
    const [show, setShow] = useState(false);
     const [id,setId]= useState()
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setId(id)
        setShow(true)
    };
  return (
    <>
    <Card sx={{ maxWidth: 345,marginTop:"20px" }}>
     
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="warning" onClick={()=>handleShow(product._id)}  >Edit</Button>{' '}
      <Button style={{backgroundColor:"red"}} onClick={()=>dispatch(Delete_Poste(product._id))}  >delete</Button>{' '}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <UpdatePostee show={show}  handleClose={handleClose} id={id} product={product}/>
  </>
  );
}
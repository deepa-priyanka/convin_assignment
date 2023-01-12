
import {useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input,Typography,Button,styled } from "@mui/material";
import { useNavigate,useParams } from 'react-router-dom';

import {addTrack} from './service/api';

const Container =styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    }`


const initialValues={
    name: '',
    link:''
}

const Add=()=>{
    const [user,setUser]=useState(initialValues);
    const navigate=useNavigate();
    const onValueChange=(e)=>{
        setUser({ ...user,[e.target.name]: e.target.value })
        console.log(user);
    }

    const AddTrack=async ()=>{
            await addTrack(user);
            navigate('/');
    }


    return(
       <Container>
           <Typography variant='h4'>Add name </Typography>
           <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name" />
           </FormControl>
           <FormControl>
                <InputLabel>Link</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="link" />
           </FormControl>
            <FormControl>
                <Button onClick={()=> AddTrack()} variant='contained'> Add Track</Button>
            </FormControl>
       </Container>
    )
}

export default Add;
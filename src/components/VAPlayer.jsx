
import {useEffect, useState} from 'react';
// import Link from '@mui/material/Link';
// import * as React from 'react';
import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';
import {BrowserRouter as Router, Route,useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';

import { getUsers ,deleteUser} from './service/api';

const VAPlayer=()=>{

  const[user,setUsers]=useState([]);

useEffect(() =>{
    getTrackDetails();
} , [])

  const navigate=useNavigate();

  const getTrackDetails=  async ()=>{
    let response= await getUsers();
    console.log(response);
    setUsers(response.data);
  }

  const deleteUserData = async (name) =>{
    await deleteUser(name);
    getUsers();
  }

  return(
   <Table>
     <TableHead>
       <TableRow>
         <TableCell> Name of the track</TableCell>
         <TableCell> Link</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {
         user.map(user=>(
           <TableRow>
           <TableCell>{user.name}</TableCell>
           <TableCell><Link
  component="button"
  variant="body2"
  onClick={ ()=> navigate('{user.link}')  }
  
>
  {user.link}           
</Link></TableCell>
          <TableCell>
            <Button variant="contained" style={{marginRight:10}} component ={Link} to ={`/edit/${user.name}`}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.name)} >  Delete</Button>
          </TableCell>
           </TableRow>
         ))
       }
       </TableBody>
   </Table>
  )
}

export default VAPlayer;
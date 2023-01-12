
import { AppBar, Toolbar, Typography, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
 background: #111111;
`
const Tabs= styled(NavLink)`
 font-size:20px;
 margin-right:20px;
 color: inherit;
 text-decoration: none;
`
const NavBar =() =>{
    return(
       <Header position='static'>
           <Toolbar>
               <Tabs to="/">Video & Audio Player</Tabs>
               {/* <Tabs> Entertainment</Tabs> */}
               {/* <Tabs> Education</Tabs> */}
               <Tabs to="/add">Add a video or audio track</Tabs>
           </Toolbar>
       </Header>
    )
}

export default NavBar;
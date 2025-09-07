import { AppBar, Toolbar, Typography, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background-color:#000;
`
const Tab = styled(Toolbar)`
    display:flex;
    justify-content: space-between;
`
const Options = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color:inherit;
    text-decoration:none;
`

const Navbar = () => {
    return (
        <Header>
            <Tab>
                <Options to ="/" >Hi!</Options>
                <Options to ="/all" >View All Celebrity</Options>
                <Options to ="/add" >Add A Celebrity</Options>
            </Tab>
        </Header>
    )
} 

export default Navbar;
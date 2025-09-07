import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { getUser } from '../services/api';


const TableTab = styled(Table)`
    margin-top:10%;
    width: 100%;

    & > thead {
        background-color:#000;
    }
    & > thead > tr > th {
        font-weight: 700;
        color: #fff;
    }
`

const Allusers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let response = await getUser();
        //console.log(response.data)
        setUsers(response.data);
    }

    return (
        <TableTab>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Parent's Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Sex</TableCell>
                    <TableCell>Hometown</TableCell>
                    <TableCell>Industry</TableCell>
                    <TableCell>Best Known For</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.Name}</TableCell>
                            <TableCell>{user.Parentname}</TableCell>
                            <TableCell>{user.Age}</TableCell>
                            <TableCell>{user.Sex}</TableCell>
                            <TableCell>{user.Hometown}</TableCell>
                            <TableCell>{user.Industry}</TableCell>
                            <TableCell>{user.Best}</TableCell>
                            <TableCell>
                                <Button variant="outlined" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </TableTab>
    )
}


export default Allusers;
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import {addUser} from '../services/api'

const Container = styled(FormGroup)`
    width: 100%;
    margin: 5% auto;

    & > div {
        margin-top: 20px;
    }
`

    const initialValue = {
        Name : "",
        Parentname : "",
        Age : "",
        Sex: "",
        City : "",
        Industry: "",
        Best : ""
    }

const Adduser = () => {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.value, e.target.name);
        setUser({...user, [e.target.name] : e.target.value})
        //console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h3"> Add Any Celebrity's Details </Typography>
            <br />
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name= "Name" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Parent's Name</InputLabel>
                <Input name= "Parentname" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input name= "Age" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Sex</InputLabel>
                <Input name= "Sex" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Country / City</InputLabel>
                <Input name= "City" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Industry</InputLabel>
                <Input name= "Industry" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Best Known For</InputLabel>
                <Input name= "Best" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <br />
            <FormControl>
            <Button variant = "contained" onClick={() => addUserDetails()}> Add Details</Button>
            </FormControl>
        </Container>

    )
}


export default Adduser;
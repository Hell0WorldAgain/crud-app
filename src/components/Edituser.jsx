import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';

import { getUserByID, editUser } from '../services/api'

const Container = styled(FormGroup)`
    width: 100%;
    margin: 15% auto;

    & > div {
        margin-top: 20px;
    }
`

    const initialValue = {
        Name : "",
        PSname : "",
        Age : "",
        Sex: "",
        City : "",
        Industry: "",
        Best : ""
    }

const Edituser = () => {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let response = await getUserByID(id);
        //console.log(response)
        setUser(response.data);
    }

    const onValueChange = (e) => {
        // console.log("Hello ", e.target.value, e.target.name);
        setUser({...user, [e.target.name] : e.target.value})
        //console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h3"> Edit required Details </Typography>
            <br />
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name= "Name" onChange = {(e) => onValueChange(e)} value={user.Name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Parent / Spouse</InputLabel>
                <Input name= "PSname" onChange = {(e) => onValueChange(e)} value={user.PSname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input name= "Age" onChange = {(e) => onValueChange(e)} value={user.Age}/>
            </FormControl>
            <FormControl>
                <InputLabel>Sex</InputLabel>
                <Input name= "Sex" onChange = {(e) => onValueChange(e)} value={user.Sex}/>
            </FormControl>
            <FormControl>
                <InputLabel>Country / City</InputLabel>
                <Input name= "City" onChange = {(e) => onValueChange(e)} value={user.City}/>
            </FormControl>
            <FormControl>
                <InputLabel>Industry</InputLabel>
                <Input name= "Industry" onChange = {(e) => onValueChange(e)} value={user.Industry}/>
            </FormControl>
            <FormControl>
                <InputLabel>Best Known For</InputLabel>
                <Input name= "Best" onChange = {(e) => onValueChange(e)} value={user.Best}/>
            </FormControl>
            <br />
            <FormControl>
            <Button variant = "contained" onClick={() => editUserDetails()}> Save</Button>
            </FormControl>
        </Container>

    )
}


export default Edituser;
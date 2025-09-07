import { useState } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, Typography, styled } from '@mui/material'

const Conatiner = styled(FormGroup)`
    width: 100%;
    margin: 15% auto;

    & > div {
        margin-top: 20px;
    }
`

    const initialValue = {
        Name : "",
        Parentname : "",
        Age : "",
        Sex: "",
        Hometown : "",
        Bestfilm : ""
    }

const Adduser = () => {

    const [user, setUser] = useState(initialValue);

    const onValueChange = (e) => {
        // console.log("Hello ", e.target.value, e.target.name);
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
    }

    return (
        <Conatiner>
            <Typography variant="h3"> Add Actor/Actress Details </Typography>
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
                <InputLabel>Hometown</InputLabel>
                <Input name= "Hometown" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Best Film, Known For</InputLabel>
                <Input name= "Bestfilm" onChange = {(e) => onValueChange(e)}/>
            </FormControl>
            <br />
            <FormControl>
            <Button variant = "contained"> Add Details</Button>
            </FormControl>
        </Conatiner>

    )
}


export default Adduser;
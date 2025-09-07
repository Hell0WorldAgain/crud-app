
import { Typography } from '@mui/material';


const Home = () => {
    return (
        <div style={{textAlign: 'center', margin: '5% auto',width: '90%' }}>
            <Typography variant="h2">Hi, there!</Typography>
            <br /> <br />
            <Typography variant="h4">Welcome to the Celebrity Directory!</Typography>
            <br /> <br />
            <Typography>
                This simple and interactive web app lets you explore a growing list of celebrities from around the world. Whether you're a fan of actors, musicians, athletes, or influencers, you'll find interesting profiles here!
                <br /> <br />
                You can view basic details about each celebrity, such as their name, profession, country, and more. Want to add a new celebrity to the list? Go ahead! This app is built so that anyone can contribute by adding, editing, or even removing entries. It's like an open book where fans and users help keep things fresh and updated.
                <br /><br />
                Think of it as a fun and easy way to build a global celebrity directory together, no technical skills needed. Just click around and enjoy!
            </Typography>
        </div>
    )
}


export default Home;
import { Button, TextField } from '@mui/material'
import "./Home.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


const Home = ({name, setName, fetchQuestions}) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const navigate  = useNavigate();

    const handleSubmit = () =>{
       if(!name || !password || !email) {
           setError(true);
           return;
       }
       else{
           setError(false)
            fetchQuestions(password,email)
            navigate('/quiz');
       }
    };

    return (
    <div className="content">
        <div className="settings__select">
        {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <Button  onClick={handleSubmit}
             variant="contained"
             color="primary"
             size="large">Login
            </Button>
            
        </div>
    </div>
    )
}

export default Home

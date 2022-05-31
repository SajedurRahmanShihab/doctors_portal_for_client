import { Alert, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, authError } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not matched')
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                    <Box>
                        <Typography style={{ textAlign: 'center' }} variant="body1" gutterBottom>
                            Register
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="standard-basic"
                                type="email"
                                label="Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                name="password"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="standard-password-input2"
                                label="Retype Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                name="password2"
                                onChange={handleOnChange}
                            />

                            <Button
                                sx={{ ml: 1, mt: 1, width: '90%' }}
                                type="submit"
                                variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Registered? Please Login</Button></NavLink>
                        </form>

                        {/* {isLoading && <CircularProgress />} */}
                        {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
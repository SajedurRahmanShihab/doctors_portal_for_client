import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [loginData, setLoginData] = useState({})
    const { loginUser, user, authError, signInWithGoogle } = useAuth()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(field, value, newLoginData)
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} md={6}>
                    <Box>
                        <Typography style={{ textAlign: 'center' }} variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="standard-basic"
                                type="email"
                                label="Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                name="password"
                                onBlur={handleOnChange}
                            />

                            <Button
                                sx={{ ml: 1, mt: 1, width: '90%' }}
                                type="submit"
                                variant="contained">Login</Button>
                            <Box sx={{ textAlign: 'center', mt: 1, mr: 2 }}>
                                <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                            </Box>
                            {/* {isLoading && <CircularProgress />} */}
                            {user?.email && navigate(from, { replace: true })}
                            {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p style={{ textAlign: 'center' }}>-----------------------------</p>
                        <Box sx={{ textAlign: 'center', mr: 1 }}>
                            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                        </Box>



                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
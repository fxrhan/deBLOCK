import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { account } from "../services/appwriteConfig";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      await account.createSession(userDetails.email, userDetails.password);
      console.log("success")
      localStorage.setItem('email',userDetails.email);
       navigate("/dashboard");
    } catch (error) {
      // toast.error(`${error.message}`)

    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{"minHeight": "100vh","backgroundColor": "rgb(226 232 240)"}}>
      <Container   component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              
              </Grid>
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12}>
                <TextField

onChange={(e) => {
  setUserDetails({
    ...userDetails,
    email: e.target.value,
  });
}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  });
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
            
        
              </Grid>
            </Grid>
            <div className="mb-3">
          
        </div>
            
            <Button 
              type="submit"
          onClick={(e) => loginUser(e)}
          className="btn btn-success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LogIn
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                 New here? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </div>
    
    </ThemeProvider>
  );
};

export default Login;
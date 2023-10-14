import {Box, Button, TextField, Typography} from "@mui/material";
import React from 'react';

const Auth =() => {
  return 
    <div>
      <form>
        <Box 
        maxWidth={400}
        display="flex" 
        flexDirection={'column'}
        alignItems='center' 
        justifyContent={'center'}>
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          margonTop={5}
          borderRadious={5}
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
            </Typography>
          <TextField placeholder="Name" margin="normal"/>
          <TextField placeholder="Email"margin="normal"/>
          <TextField placeholder="Password" margin="normal"/>
          <Button
          variant="contained" 
          sx={{ borderRadius:3,marginTop:3}}
          colour="warning"
          >
            Submit
            </Button>
          <Button onClick={(setIsSignup(!isSignup))} sx={{borderRadius:3, marginTop:3}}>
            Change To {isSignUp ? "Login" : "Signup"}
            </Button>
        </Box>
      </form>
    </div>;
  
};

export default Auth;
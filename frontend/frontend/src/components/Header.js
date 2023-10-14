import React from "react";
import {AppBar, Typography, Toolbar, Box, Button} from "@mui/material";
const Header = () => {
  return (
  <AppBar
  position="sticky"
   sx={{background:green
}}>
       <Toolbar>
         <Typography varient="h4">BlogsApp</Typography>
         <Box display="flex">
            <Tabs>
              <Tab lebel="All Blogs" />
              <Tab label="My Blogs"/>
            </Tabs>
         </Box>
         <Box display="flex" marginLeft="auto">
            <Button  variant='contained' sx={{margin:'1' ,borderRadius:10}} color="warning">
              Login
              </Button>
            <Button variant='contained' sx={{margin:'1',borderRadius:10}} color="warning">
              Signup
              </Button>
          </Box> 
       </Toolbar>
  </AppBar>
  );
};

export default Header;
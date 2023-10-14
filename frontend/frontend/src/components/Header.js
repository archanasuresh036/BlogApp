import React, { useState } from "react";
import {AppBar, Typography, Toolbar, Box, Button} from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
  <AppBar
  position="sticky"
   sx={{background:green
}}>
       <Toolbar>
         <Typography varient="h4">BlogsApp</Typography>
         <Box display="flex" marginLeft={'auto'} marginRight='auto'>
            <Tabs textColor="inherit" value={value}onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={Link} to="/blogs" lebel="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
            </Tabs>
         </Box>
         <Box display="flex" marginLeft="auto">
            <Button 
               LinkComponent={Link} to="/auth"
             variant='contained' sx={{margin:'1' ,borderRadius:10}} color="warning">
              Login
              </Button>
            <Button 
            LinkComponent={Link} to="/auth"
            variant='contained' sx={{margin:'1',borderRadius:10}} color="warning">
              Signup
              </Button>
          </Box> 
       </Toolbar>
  </AppBar>
  );
};

export default Header;
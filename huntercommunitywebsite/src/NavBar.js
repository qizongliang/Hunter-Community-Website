import React from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
const Header = () => 
{
    return(
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography> HUNTER CS GUIDE </Typography>
                    <Tabs textColor="inherit">
                        <Tab label= "About" />
                        <Tab label= "Degree Map" />
                        <Tab label= "Internships"/>
                        <Tab label= "Authors" />
                        
                    </Tabs>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;
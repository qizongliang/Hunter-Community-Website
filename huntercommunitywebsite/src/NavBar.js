import React from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@mui/material'

const Header = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography> HUNTER CS GUIDE </Typography>
          <Tabs textColor="inherit">
            <Tab label="ABOUT" />
            <Tab label="DEGREE MAP" />
            <Tab label="INTERNSHIP GUIDE" />
            <Tab label="RESOURCES" />
            <Tab label="TEAM" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header

import React from 'react'
import Banner from '../banner'
import Typography from '@mui/material/Typography';

const about = () => {
  return (
    <div>
      <Banner text={'ABOUT'} />
      <Typography variant="h4" align="center" sx={{ mx: 20,mt: 5}}>We are two hunter college students who want to help CS major hunter students to become successful in their own career. Professional wise and academic wise.This is a guide for hustling your way into a degree as well as to improve your professional experience in order to create the best version of yourself by the time you finish college. There is no definite pathway to education and a professional career but utilizing these resources can give you clues as to where you stand as well as where you can go. This resource is meant to act as a guide to navigate this urban jungle full of distraction. We’re excited to motivate everyone to do better and help hunter student to prepare for their future.</Typography>

    </div>

  )
}

export default about

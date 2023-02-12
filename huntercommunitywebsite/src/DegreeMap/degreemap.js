import React from 'react'
import Banner from '../banner'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { useEffect, useState } from 'react'
import Display from './display'

const Degreemap = () => {
  const [summerSwitch, setSummer] = useState(false)

  const switchSummer = (event) => {
    setSummer(event.target.checked)
  }

  const [precalSwitch, setPrecal] = useState(false)

  const switchPrecal = (event) => {
    setPrecal(event.target.checked)
  }

  return (
    <>
      <Banner text={'DEGREE MAP'} />
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <FormControlLabel
              control={
                <Switch checked={summerSwitch} onChange={switchSummer} />
              }
              label="Summer"
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <FormControlLabel
              control={
                <Switch checked={precalSwitch} onChange={switchPrecal} />
              }
              label="Precal"
            />
          </div>
        </Grid>
      </Grid>

      {Display(summerSwitch, precalSwitch)}
    </>
  )
}

export default Degreemap

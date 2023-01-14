import React from 'react'

const classes = {
  banner: {
    width: '100vw',
    backgroundColor: '#723DAC',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
  },
  bannerContent: {
    width: 'min(100vw, 1000px)',
  },
  userSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: '55px',
    color: 'white',
  },
}

export default function Banner({ text }) {
  return (
    <div style={classes.banner}>
      <div style={classes.bannerContent}>
        <div style={classes.userSection}>
          <span style={classes.text}>{text}</span>
        </div>
      </div>
    </div>
  )
}

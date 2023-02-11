import React from 'react'
import Banner from '../banner'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const degreemap = () => {
  const [checkedsummer, setCheckedsummer] = useState(false);

  const switchHandlersummer = (event) => {
    setCheckedsummer(event.target.checkedsummer);
  };
  const [checkedprecal, setCheckedprecal] = useState(false);

  const switchHandlerprecal = (event) => {
    setCheckedprecal(event.target.checkedprecal);
  };
  return (
    <div>
      <Banner text={'DEGREE MAP'} />
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Summer" />
        <FormControlLabel control={<Switch defaultChecked />} label="Precal" />
    </FormGroup>
    </div>
  )
}

export default degreemap

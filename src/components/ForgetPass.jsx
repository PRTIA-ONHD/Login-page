// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ForgetPass() {
  return (
    // <div style={{width: '100%',backgroundColor: 'red'}}>
    <Stack spacing={2} direction="row" style={{alignItems:'flex-end',width: '100%'}} >
      <Button variant="text" style={{marginTop: '15px',}}>forget password?</Button>
    </Stack>
   
  );
}

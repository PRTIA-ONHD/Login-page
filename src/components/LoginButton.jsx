import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LoginButton() {
  return (

    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{width:'100%', backgroundColor: '#393A3A',marginTop: 30}}>Login</Button>
    </Stack>

  );
}
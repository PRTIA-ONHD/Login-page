
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 0.0001, width: '45ch', height: '9ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
      <div style={{width: '100%', marginTop: '20px'}}>
      <TextField style={{width: '100%'}}
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-email"
        />
      <TextField style={{width:'100%', marginTop: '15px'}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
</div>
      // </Box>
      
  );
}


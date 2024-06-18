import { useState } from 'react';
import ForgetPass from './ForgetPass'; 
import BasicButtons from './LoginButton'; 
//import ForgetButton from './ForgetButton';
//import Links from './ForgetPass';
import FormPropsTextFields from './TextField'
const Login = ({ onLogin}) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ Username, password });
  };

  return (
    <div>
      <FormPropsTextFields/>
      <div>
        <BasicButtons  onClick={handleLogin}  />
      </div>
      <div style={{justifyContent: ''}}>
        {/* <ForgetButton /> */}
      </div>
      <div>
        <ForgetPass/>
      </div>

      

    </div>
  );
};

export default Login;

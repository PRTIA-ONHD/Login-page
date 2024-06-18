import Login from '../../components/Login';
import './redpage.css';
import LogoPicture from '../../assets/logo.png';

const RedPage = () => {

  // กำหนดฟังก์ชั่น handleLogin ที่จะถูกเรียกเมื่อมีการ login
  const handleLogin = (data) => {
    console.log('Login Data:', data);
  };

  return (
    <div className='main'>
      <div>
        <nav >
          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
            <img src={LogoPicture} width="120" height="120" />
          </div>
          <Login onLogin={handleLogin} />
        </nav>
      </div>

    </div>
  );
};

export default RedPage; 

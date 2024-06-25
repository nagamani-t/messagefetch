import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [userData, setUserData] = useState({ name: '', phoneNumber: '', email: '' });

  useEffect(() => {
    const params = getQueryParams();
    console.log("params",params)
    setUserData(params);
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.centeredContent}>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
          <img src={`${process.env.PUBLIC_URL}/dashboard.gif`} alt="Loading GIF" height={120} width={120} />
          <p style={{ fontSize: '24px' }}>Welcome to dashboard {userData?.name}!</p>
          <p style={{ fontSize: '12px' }}>Your SMS fetched successfully from {userData?.phoneNumber} contact number</p>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '900px',
    margin: 0,
    padding: 0,
  },
  centeredContent: {
    textAlign: 'center',
  },
};

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get('name'),
    phoneNumber: params.get('phoneNumber'),
    email: params.get('email'),
  };
}

export default App;

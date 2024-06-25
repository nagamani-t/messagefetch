
import './App.css';


function App() {
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: "10px" }}><img src={`${process.env.PUBLIC_URL}/dashboard.gif`} alt="Loading GIF" height={120} width={120} /> 
      welcome to dashboard
      <p style={{fontSize:'12px'}}>your sms fetched successfully</p></div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: "10px" }}>
        <img src={`${process.env.PUBLIC_URL}/dashboard.gif`} alt="Loading GIF" height={120} width={120} /> 
        Welcome to dashboard
        <p style={{ fontSize: '12px' }}>Your SMS fetched successfully</p>
      </div>
    </div>
  );
}


export default App;

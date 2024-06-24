import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <img 
          src={`${process.env.PUBLIC_URL}/dashboard.gif`} 
          alt="Loading GIF" 
          height={120} 
          width={120} 
          style={{ objectFit: 'contain' }}
        />
        <p>Welcome to Dashboard</p>
        <p>Your SMS fetched successfully</p>
      </div>
    </div>
  );
}

export default App;

import './App.css';


function App() {
  return (
    <div style={styles.container}>
    <div style={styles.centeredContent}>
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
                <img src={`${process.env.PUBLIC_URL}/dashboard.gif`} alt="Loading GIF" height={120} width={120} />
                <p style={{fontSize:'24px'}}>Welcome to dashboard!</p>
                <p style={{ fontSize: '12px' }}>Your SMS fetched successfully</p>
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
   height:'900px',
      margin: 0,
      padding: 0,
   
  },
  centeredContent: {
      textAlign: 'center',
  },
};



export default App;

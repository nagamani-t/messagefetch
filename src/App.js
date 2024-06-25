import './App.css';


function App() {
  return (
    <div style={styles.container}>
    <div style={styles.centeredContent}>
        Your centered text goes here
    </div>
</div>
  );
}
const styles = {
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
  },
  centeredContent: {
      textAlign: 'center',
  },
};



export default App;

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
   height:'900px',
      margin: 0,
      padding: 0,
      backgroundColor:"red"
  },
  centeredContent: {
      textAlign: 'center',
  },
};



export default App;

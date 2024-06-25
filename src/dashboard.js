import React from 'react'
import './App.css';

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <div style={styles.centeredContent}>
                Your centered text goes here
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        padding: 0,
    },
    centeredContent: {
        textAlign: 'center',
    },
};

export default Dashboard
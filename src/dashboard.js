import React from 'react'

const Dashboard = () => {
  return (
    <div><div style={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: "10px" }}>
    <img src={`${process.env.PUBLIC_URL}/dashboard.gif`} alt="Loading GIF" height={120} width={120} /> 
   <p >Welcome to dashboard</p> 
    <p style={{ fontSize: '12px' }}>Your SMS fetched successfully</p>
  </div></div>
  )
}

export default Dashboard
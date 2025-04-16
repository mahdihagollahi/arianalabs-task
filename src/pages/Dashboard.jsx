import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'

const Dashboard = () => {
  return (
    <div className="flex items-center min-h-screen">
    <Sidebar />
   
    <div className="flex-1">
        <DashboardPage />
      </div>
  </div>
  )
}

export default Dashboard
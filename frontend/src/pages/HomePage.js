import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'; // or other chart type
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function HomePage() {
  const [stats, setStats] = useState({ devices: 0, recycled: 0, userParticipation: 0 });

  useEffect(() => {
    axios.get('/api/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  const chartData = {
    labels: ['Devices', 'Recycled', 'User Participation'],
    datasets: [{
      label: 'E-Waste Statistics',
      data: [stats.devices, stats.recycled, stats.userParticipation],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1
    }]
  };

  return (
    <div className="page">
      <h1>Welcome to EWMS</h1>
      <p>Track and manage your e-waste responsibly.</p>
      <div className="stats">
        <p>Devices Registered: {stats.devices}</p>
        <p>Items Recycled: {stats.recycled}</p>
        <p>User Participation: {stats.userParticipation}</p>
        <Chart type="bar" data={chartData} />
      </div>
    </div>
  );
}

export default HomePage;

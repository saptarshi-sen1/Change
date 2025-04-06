import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function RecyclingJourney() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.get('/api/recycle/steps')
      .then(res => {
        setSteps(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch recycling steps');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Recycling Process</h2>
      {loading && <p className="loading">Loading recycling steps...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && steps.map((step, index) => (
        <div key={index}>
          <h3>Step {index + 1}: {step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecyclingJourney;

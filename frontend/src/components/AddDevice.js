import React, { useState } from 'react';
import axios from 'axios';

function AddDevice() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/devices/add', { name, type, status });
      console.log('Device added:', response.data);
      setName('');
      setType('');
      setStatus('');
    } catch (err) {
      console.error('Error adding device:', err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Device</h2>
      <input
        type="text"
        placeholder="Device Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Device Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Device Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Add Device</button>
    </form>
  );
}

export default AddDevice;
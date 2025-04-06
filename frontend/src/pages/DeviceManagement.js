import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeviceManagement() {
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({ type: '', model: '', purchaseDate: '' });
  const [editingDevice, setEditingDevice] = useState(null);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = () => {
    axios.get('/api/devices')
      .then(res => setDevices(res.data))
      .catch(err => console.error(err));
  };

  const handleAddDevice = () => {
    axios.post('/api/devices/register', newDevice)
      .then(() => {
        fetchDevices();
        setNewDevice({ type: '', model: '', purchaseDate: '' });
      })
      .catch(err => console.error(err));
  };

  const handleEditDevice = (device) => {
    setEditingDevice(device);
  };

  const handleUpdateDevice = () => {
    axios.put(`/api/devices/${editingDevice._id}`, editingDevice)
      .then(() => {
        fetchDevices();
        setEditingDevice(null);
      })
      .catch(err => console.error(err));
  };

  const handleDeleteDevice = (deviceId) => {
    axios.delete(`/api/devices/${deviceId}`)
      .then(() => fetchDevices())
      .catch(err => console.error(err));
  };

  return (
    <div className="page">
      <h2>Your Devices</h2>
      <div>
        <input
          placeholder="Device Type"
          value={newDevice.type}
          onChange={(e) => setNewDevice({...newDevice, type: e.target.value})}
        />
        <input
          placeholder="Model"
          value={newDevice.model}
          onChange={(e) => setNewDevice({...newDevice, model: e.target.value})}
        />
        <input
          type="date"
          value={newDevice.purchaseDate}
          onChange={(e) => setNewDevice({...newDevice, purchaseDate: e.target.value})}
        />
        <button onClick={handleAddDevice}>Add Device</button>
      </div>
      <ul>
        {devices.map(device => (
          <li key={device._id}>
            {device.type} - {device.model}
            <button onClick={() => handleEditDevice(device)}>Edit</button>
            <button onClick={() => handleDeleteDevice(device._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingDevice && (
        <div>
          <h3>Edit Device</h3>
          <input
            value={editingDevice.type}
            onChange={(e) => setEditingDevice({...editingDevice, type: e.target.value})}
          />
          <input
            value={editingDevice.model}
            onChange={(e) => setEditingDevice({...editingDevice, model: e.target.value})}
          />
          <input
            type="date"
            value={editingDevice.purchaseDate}
            onChange={(e) => setEditingDevice({...editingDevice, purchaseDate: e.target.value})}
          />
          <button onClick={handleUpdateDevice}>Update</button>
        </div>
      )}
    </div>
  );
}

export default DeviceManagement;

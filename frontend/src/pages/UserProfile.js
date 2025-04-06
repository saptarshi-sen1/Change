import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function UserProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get('/api/auth/user')
      .then(res => {
        setUser(res.data.user);
      })
      .catch(err => {
        console.error('Error fetching user data:', err.response?.data?.error || err.message);
      });
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        value={user.name || ''}
        placeholder="Name"
        readOnly
      />
      <input
        type="email"
        value={user.email || ''}
        placeholder="Email"
        readOnly
      />
    </div>
  );
}

export default UserProfile;

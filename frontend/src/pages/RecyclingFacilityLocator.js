import React, { useState, useEffect } from 'react';

function RecyclingFacilityLocator() {
  const [userLocation, setUserLocation] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Failed to get location.");
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetch(`/api/facilities?lat=${userLocation.lat}&lng=${userLocation.lng}`)
        .then(response => response.json())
        .then(data => setFacilities(data))
        .catch(error => {
          console.error("Error fetching facilities:", error);
          setError("Failed to fetch facilities.");
        });
    }
  }, [userLocation]);

  return (
    <div>
      <h2>Recycling Facility Locator</h2>
      {loading && <p className="loading">Loading location...</p>}
      {error && <p className="error">{error}</p>}
      {userLocation && (
        <p>Your location: Lat {userLocation.lat}, Lng {userLocation.lng}</p>
      )}
      {facilities.length > 0 ? (
        <ul>
          {facilities.map(facility => (
            <li key={facility.id}>{facility.name} - {facility.address}</li>
          ))}
        </ul>
      ) : (
        <p>No facilities found.</p>
      )}
    </div>
  );
}

export default RecyclingFacilityLocator;

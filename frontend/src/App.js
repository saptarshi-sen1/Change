import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeviceManagement from './pages/DeviceManagement';
import RecyclingJourney from './pages/RecyclingJourney';
import RecyclingFacilityLocator from './pages/RecyclingFacilityLocator';
import UserProfile from './pages/UserProfile';
import PdfViewer from './pages/PdfViewer'; // Import the PDF Viewer component
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="container"> {/* Add a container for consistent layout */}
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/devices">Devices</Link></li>
            <li><Link to="/recycling">Recycling Journey</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/pdf">View PDF</Link></li> {/* Add a link to the PDF Viewer */}
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DeviceManagement />} />
          <Route path="/recycling" element={<RecyclingJourney />} />
          <Route path="/facilities" element={<RecyclingFacilityLocator />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/pdf" element={<PdfViewer />} /> {/* Add the PDF Viewer route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

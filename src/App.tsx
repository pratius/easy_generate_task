// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/" element={<h1>Welcome to the Application</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

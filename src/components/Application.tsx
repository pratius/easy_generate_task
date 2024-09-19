import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Application: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality here, e.g., clearing tokens or Redux state
    navigate('/signin'); // Redirect to SignIn page after logout
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Application Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container component="main" maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Application!
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have successfully signed in. This is your dashboard.
        </Typography>

        {/* Additional actions or info */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => alert('Feature coming soon!')}
        >
          Explore Features
        </Button>
      </Container>
    </Box>
  );
};

export default Application;

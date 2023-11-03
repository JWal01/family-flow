import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Typography, Container, Button } from '@mui/material';

function UserPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  
  const isNewUser = !user.username || !user.id;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to FAMILY FLOW, {user.username || 'New User'}!
        <br />
      </Typography>
      {isNewUser ? (
        <Typography variant="body1" gutterBottom>
          Let's add family members to get started.
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          {/* Your user ID is: {user.id} */}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </Button>
    </Container>
  );
}

export default UserPage;

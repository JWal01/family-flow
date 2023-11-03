import React from 'react';
import { Typography, Paper, Container,Link } from '@mui/material';



function AboutPage() {
  return (
    <Container component="main" maxWidth="sm">
      <Paper style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Purpose
        </Typography>
        <Typography variant="body1" paragraph>
        The main purpose of FAMILY FLOW is to offer a streamlined and intuitive approach to managing life's events. 
        </Typography>
        <Typography variant="h5" component="h2" >
          Technologies <br></br>
        </Typography>
        <Typography variant="body1" paragraph>
          React<br></br>
          Redux<br></br>
          Axios<br></br>
          Node<br></br>
          Express<br></br>
          Material UI<br></br>
          Git<br></br>
          GitHub
        </Typography>
        <Typography variant="h5" component="h2" >
          What's Next! <br></br>
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am excited to add a calendar function to the app. I picture being able to add events and as they are added they are populating to a calendar. The calendar tab will take users to a monthly view with all the scheduled activities listed on their day.  
        </Typography>
        {/* <Typography variant="h5" component="h2" gutterBottom>
          Connect with Jeff
        </Typography>
        <Link href="https://www.linkedin.com/in/jeff-walter-a270004b/" target="_blank" rel="noopener noreferrer">
        https://www.linkedin.com/in/jeff-walter-a270004b/
        </Link> */}
      </Paper>
    </Container>
  );
}

export default AboutPage;

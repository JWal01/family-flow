import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = () => {
    history.push('/login');
  };

  return (
    <div className="landing-container">
      <h2>Welcome to Family Flow</h2>
      <p>
        We are a family-friendly app looking to make scheduling and viewing events with family and friends easier.
      </p>
      <RegisterForm />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LandingPage;

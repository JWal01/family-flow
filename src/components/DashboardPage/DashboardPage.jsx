import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DashboardPage() {
  return (
    <div className="container">
      <p>Dashboard</p>
    </div>
  );
}

export default DashboardPage;
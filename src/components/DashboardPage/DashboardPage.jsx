import React from 'react';

function DashboardPage({ memberList }) {
  console.log("Received memberList:", memberList); 
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="member-buttons">
        {memberList.map(member => (
          <button key={member.id}>{member.member_name}</button>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;

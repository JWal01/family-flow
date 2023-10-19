import { useSelector } from 'react-redux';

function DashboardPage() {
  const memberList = useSelector(store => store.memberList);
  console.log('Received MemberList:', memberList);

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

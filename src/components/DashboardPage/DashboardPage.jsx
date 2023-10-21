import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function DashboardPage() {
  const memberList = useSelector(store => store.memberList);
  console.log('Received MemberList:', memberList);
  const dispatch = useDispatch();

  // const handleClick = (familyMemberId) => {
  //   dispatch({
  //     type: 'FETCH_EVENTS_FOR_MEMBER',
  //     payload: { familyMemberID }, 
  //   })
  // }

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="member-buttons">
        {memberList.map(member => (
          <button key={member.id} onClick={() => handleClick(member.id)} >{member.member_name}</button>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;

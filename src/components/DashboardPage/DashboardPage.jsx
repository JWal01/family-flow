import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './DashboardPage.css';





function formatDateTime(dateTimeString) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(dateTimeString).toLocaleString(undefined, options);
}

function DashboardPage() {
  const memberList = useSelector((store) => store.memberList);
  const eventsList = useSelector((store) => store.eventsList); 
  const dispatch = useDispatch();
  const [selectedFamilyMember, setSelectedFamilyMember] = useState('');

  

 

  const handleClick = (familyMemberId) => {
    setSelectedFamilyMember(familyMemberId); 
    dispatch({ type: 'FETCH_EVENTS_FOR_FAMILY_MEMBER', payload: familyMemberId });
  };


  const handleDelete = (eventId) => {
    dispatch ({ type: 'DELETE_EVENTS', payload: eventId })
  };

  useEffect(() => {
    console.log('Updated eventsList:', eventsList);
  }, [eventsList]);




  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <div className="member-buttons">
        {memberList.map((member) => (
          <button key={member.id} onClick={() => handleClick(member.id)}>
            {member.member_name}
          </button>
        ))}
      </div>
      <div className="events-list">
        <h2>Events for {selectedFamilyMember && memberList.find((member) => member.id === selectedFamilyMember).member_name}</h2>
        <ul>
          {eventsList
            .filter((event) => event.family_member_id === selectedFamilyMember)
            .map((event) => (
              <li key={event.event_id}>{event.title}, {event.description},{event.location},  {formatDateTime(event.start_date, event.start_time)}
              <button onClick={() => handleDelete(event.event_id)} className="delete-button" >Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;

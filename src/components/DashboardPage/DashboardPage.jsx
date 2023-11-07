import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './DashboardPage.css';
const { DateTime, Settings } = require('luxon');





function formatDateTime(dateString, timeString) {
  if (dateString && timeString) {
    const combinedDate = DateTime.fromISO(dateString);
    const time = DateTime.fromFormat(timeString, 'HH:mm:ss');
    const combinedDateTime = combinedDate.set({
      hour: time.hour,
      minute: time.minute,
      second: time.second,
    });
    return combinedDateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
  }
  return '';
}

function DashboardPage() {
  const memberList = useSelector((store) => store.memberList);
  const eventsList = useSelector((store) => store.eventsList);
  const dispatch = useDispatch();
  const [selectedFamilyMember, setSelectedFamilyMember] = useState('');
  const [isEditingEvent, setEditingEvent] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  const handleClick = (familyMemberId) => {
    setSelectedFamilyMember(familyMemberId);
    dispatch({ type: 'FETCH_EVENTS_FOR_FAMILY_MEMBER', payload: familyMemberId });
  };

  const handleEdit = (eventId, currentDescription) => {
    setEditingEvent(eventId);
    setEditedDescription(currentDescription);
  };

  const handleSaveEdit = () => { 
    dispatch({
      type: 'UPDATE_EVENT_DESCRIPTION',
      payload: {
        eventId: isEditingEvent,
        updatedDescription: editedDescription,
      },
    });
    window.alert("Event edited successfully");
    
    setEditingEvent(null);
    setEditedDescription('');
  };

 

  const handleDelete = (eventId) => {
    dispatch({ type: 'DELETE_EVENTS', payload: eventId });
  };

 

  useEffect(() => {
   
    dispatch({ type: 'FETCH_MEMBER_LIST' });

    if (isEditingEvent === null) {
      setEditedDescription('');
    }
  }, [dispatch, isEditingEvent]);
 

  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>
      <div className="member-buttons">
        {memberList.map((member) => (
          <button key={member.id} onClick={() => handleClick(member.id)}>
            {member.member_name}
          </button>
        ))}
      </div>
      <div className="events-list">
        <h2>
          Events for{' '}
          {selectedFamilyMember &&
            memberList.find((member) => member.id === selectedFamilyMember).member_name}
        </h2>
        <ul>
          {eventsList
            .filter((event) => event.family_member_id === selectedFamilyMember)
            .map((event) => (
              <li key={event.event_id}>
                {isEditingEvent === event.event_id ? (
                  <div>
                    <input
                      type="text"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                  </div>
                ) : (
                  <div>
                    {event.title}, {event.description}, {event.location},{' '}
                    {formatDateTime(event.start_date, event.start_time)}
                    <button onClick={() => handleDelete(event.event_id)} className="delete-button">
                      Delete
                    </button>
                      {/* <Tooltip title="Delete">
                      <IconButton>
                      <DeleteIcon onClick={() => handleDelete(event.event_id)}  />
                      </IconButton>
                      </Tooltip> */}
                    <button onClick={() => handleEdit(event.event_id, event.description)} className="edit-button" >
                      Edit
                    </button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;

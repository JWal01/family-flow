import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; 
import { useSelector, useDispatch } from 'react-redux';
const { DateTime,Settings } = require("luxon");




function addEvent() {
  const dispatch = useDispatch();
  const eventsList = useSelector((store) => store.eventsList);
  const memberList = useSelector((store) => store.memberList);
  const [familyMemberId, setFamilyMemberId] = useState('');
  
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    startTime: '',
    startDate: '',
    familyMemberId: '',
  });

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

 

  const addEvent = (e) => {
    e.preventDefault();
    dispatch ({ type: 'ADD_EVENTS', payload: eventData })
  };
  

  return (
    <form onSubmit={addEvent}>
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        value={eventData.title}
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        fullWidth
        value={eventData.description}
        onChange={handleChange}
      />
      <TextField
        name="location"
        label="Location"
        variant="outlined"
        fullWidth
        value={eventData.location}
        onChange={handleChange}
      />
      <TextField
        name="startTime"
        label="Start Time"
        variant="outlined"
        fullWidth
        type="time"
        value={eventData.startTime}
        onChange={handleChange}
      />
      <TextField
        name="startDate"
        // label="Start Date"
        variant="outlined"
        fullWidth
        type="date" 
        value={eventData.startDate}
        onChange={handleChange}
      />
       <TextField
        name="familyMemberId"
        select
        label="Select Family Member"
        variant="outlined"
        fullWidth
        value={eventData.familyMemberId}
        onChange={handleChange}
      >
        {memberList.map((member) => (
          <MenuItem key={member.id} value={member.id}>
            {member.member_name}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Event
      </Button>
    </form>
  );
}

export default addEvent;

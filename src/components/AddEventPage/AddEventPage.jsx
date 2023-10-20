import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';



function addEvent() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    startTime: '',
    startDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can submit the eventData to your backend or perform any other necessary actions here.
    console.log(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={eventData.startTime}
        onChange={handleChange}
      />
      <TextField
        name="startDate"
        label="Start Date"
        variant="outlined"
        fullWidth
        type="date" // Use the type attribute for date input
        value={eventData.startDate}
        onChange={handleChange}
      />
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

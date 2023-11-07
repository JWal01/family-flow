import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './AddFamilyMember.css';
import Alert from '@mui/material/Alert'; 
import Stack from '@mui/material/Stack'; 






function AddFamilyMember() {
  const dispatch = useDispatch();
  const memberList = useSelector((store) => store.memberList);
  // const [memberList, setMemberList] = useState([]);
  const [memberName, setMemberName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
 

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = () => {
    dispatch ({ type: 'FETCH_MEMBER_LIST' });
  }

  const addMember = (e) => {
    e.preventDefault();
    dispatch ({ type: 'ADD_MEMBER', payload: { member_name: memberName } })
    setMemberName("");
    setShowAlert(true);
    // alert('Family member added successfully!'); 
  }



  return (
    <div className="container">
          {showAlert && (
          <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert
          severity="success"
          onClose={() => setShowAlert(false)}
          >
          Family member added successfully!
          </Alert>
          </Stack>
    )}
      <p className="header" >Add Family Member</p>
      <br></br>
      <br></br>
      <form onSubmit={addMember}>
      <TextField name="member_name" label="NAME" variant="filled" value={memberName} onChange={e => setMemberName(e.target.value)} />
        <br></br>
        <br></br>
        <Button className="add-button" variant="contained" type="submit">Add</Button>
      </form>
    </div>
  );
}


export default AddFamilyMember;


import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './AddFamilyMember.css';






function AddFamilyMember() {
  const dispatch = useDispatch();
  const memberList = useSelector((store) => store.memberList);
  // const [memberList, setMemberList] = useState([]);
  const [memberName, setMemberName] = useState('');
  
 

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
  }



  return (
    <div className="container">
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


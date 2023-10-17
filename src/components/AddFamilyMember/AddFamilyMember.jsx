import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './AddFamilyMember.css';






function AddFamilyMember() {
  const [memberList, setMemberList] = useState([]);
  const [memberName, setMemberName] = useState('');

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = () => {
    axios.get('/api/member').then((response) => {
      setMemberList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong.');
    });
  };



  const addMember = (e) => {
    e.preventDefault();
    if (!memberName) {
      alert('Please enter a family member name.');
      return;
    }
  
    axios.post('/api/member', {
      member_name: memberName,
    })
      .then(response => {
        setMemberName('');
        fetchMember()
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong.');
      });
  }
  



  return (
    <div className="container">
      <p className="header" >Add Family Member</p>
      <br></br>
      <br></br>
      <form onSubmit={addMember}>
        <TextField id="filled-basic" label="NAME" variant="filled" value={memberName} onChange={e => setMemberName(e.target.value)} />
        <br></br>
        <br></br>
        <Button className="add-button" variant="contained" type="submit">Add</Button>
      </form>
    </div>
  );
}


export default AddFamilyMember;


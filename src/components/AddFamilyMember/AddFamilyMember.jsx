import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';






function AddFamilyMember() {
  const [memberList, setMemberList] = useState([]);
  const [memberName, setMemberName] = useState('');

 

  const fetchMember = () => {
    axios.get('/api/member').then((response) => {
      setMemberList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong.');
    });
  };



  // const addMember = (e) => {
  //   e.preventDefault();
  //     axios.post('/api/member', {
  //       member_name: memberName,
  //     })
  //     .then(response => fetchMember())
  //     .catch(error => {
  //       console.error(error);
  //       alert('Something went wrong.');
  //     });
  //   }
  



  return (
    <div className="container">
      <p>Add Family Member</p>
      <form onSubmit={addMember}>
      <TextField id="filled-basic" label="NAME" variant="filled" value={memberName} onChange={e => setMemberName (e.target.value)} />
      <br></br>
      <br></br>
      <Button variant="contained">Add</Button>
      </form>
    </div>
  );
}


export default AddFamilyMember;


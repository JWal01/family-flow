import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';









function AddFamilyMember() {
  return (
    <div className="container">
      <p>Add Family Member</p>
      <TextField id="filled-basic" label="NAME" variant="filled" />
      <br></br>
      <br></br>
      <Button variant="contained">Add</Button>
    </div>
  );
}

export default AddFamilyMember;
import React from 'react';
import './InfoPage.css'; 
function InfoPage() {
  return (
    <div className="info-container">
      <h1>Welcome to Family Flow</h1>
      <p>
        We are a family-friendly app looking to make it easier to schedule and view
        events of family and friends.
      </p>

      <div className="get-started">
        <h2>Get Started</h2>
        <p>
          Click the <strong>Add Family Member</strong> tab on the navbar and add family
          or friends. Once they are added, you can now view them on the
          <strong>Dashboard</strong> page.
        </p>
        <p>
          Click the <strong>Add Event</strong> tab to go to the Add Event page. Here
          you will be able to add the details of upcoming events and, once added,
          they will show up on the dashboard under the family member who the event is
          selected for.
        </p>
        <p>
          If an event changes you will have the option to <strong>Edit</strong> the description of the event to show the change.  Once an event has been completed or the date has passed the <strong>Delete</strong>  button will remove it from the list. 
        </p>
      </div>
    </div>
  );
}

export default InfoPage;

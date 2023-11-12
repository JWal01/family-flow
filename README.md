
# FAMILY FLOW

Family Flow is a web application designed to help you manage your family events and activities. Keep track of upcoming events, add family members, and stay organized with ease.

## Description

_Duration: 3 Weeks_

This app is designed with the busy family in mind. The dashboard allows users to view a list of family members and their associated events with a simple click. Users will be able to use the Family Flow Dashboard as a central hub to view all of the families upcoming events. Users can edit event descriptions on the fly to ensure event info stays current. Once an event is completed or the date has passed users will be able to delete events. 


To see the fully functional site, please visit: [https://family-flow-eaafbfaf0891.herokuapp.com/#/home]

## Screen Shot

<img width="1728" alt="Screenshot 2023-11-10 at 9 59 35 PM" src="https://github.com/JWal01/family-flow/assets/121841055/4374b635-4cc2-44f8-aa13-3bfe6c65666c">


### Prerequisites

- [Node.js](https://nodejs.org/en/)


## Installation

1. Create a `.env` file and add `SERVER_SESSION_SECRET=randomGeneratedPassword`. Use a strong password generator to create the random generated password.
1. Create a database named `prime_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
As a parent or guardian, I want to have a convenient way to manage and organize family events and activities so that I can ensure that everyone in my family is informed about upcoming events and can participate in them.

1. Register/Login to access the app. 
2. Add family members by using the "Add Family Member" page. Once added, family members will be added to the dashboard.
3. Schedule events by using the "Add Events" page. 
4. Events will now be categorized by family member and able to be viewed on the dashboard. 
5. Use the edit button if the event description needs to be changed. 
6. The delete button will remove events from the list. 


## Built With

-React.js
-Node.js
-Express.js
-PostgreSQL
-Redux


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to Alex, Marc, Chris, and the Tourmaline cohort!!

## Support
If you have suggestions or issues, please email me at [jeff.walter3001@gmail.com]
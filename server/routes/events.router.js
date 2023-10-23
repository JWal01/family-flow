const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('/events GET route');
    let queryText = `SELECT * FROM "events" WHERE "event_id" = $1;`; 
    pool.query(queryText, [req.user.id]) 
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
});

router.get('/familyMember/:familyMemberId', (req, res) => {
  if (req.isAuthenticated()) {
    const familyMemberId = req.params.familyMemberId;
    const queryText = `SELECT * FROM "events" WHERE "family_member_id" = $1;`;

    pool
      .query(queryText, [familyMemberId])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('/events POST route');
  console.log(req.body);
  // req.isAuthenticated is a function provided
  // by passport. It returns either true or false. 
  console.log('is authenticated?', req.isAuthenticated());
  if(req.isAuthenticated()) {
      console.log('user', req.user);
      // Add the pet to our database
      let queryText = `INSERT INTO "events" ("title","description", "location", "start_date", "start_time", family_member_id) 
      VALUES ($1, $2, $3, $4, $5, $6);`;
    // ! req.user.id is the currently logged in users id  
    pool.query(queryText, [req.body.title, req.body.description, req.body.location, req.body.startDate, req.body.startTime,req.body.familyMemberId])  
      .then(results => {
          res.sendStatus(201);
      }).catch(error => {
          console.log(error);
          res.sendStatus(500);
      });
  } else {
      res.sendStatus(401);
  }   
});

router.delete('/:eventId', (req, res) => {
  if (req.isAuthenticated()) {
    const eventId = req.params.eventId;
    const queryText = `DELETE FROM "events" WHERE "event_id" = $1 AND "family_member_id" = $2;`;

    pool
      .query(queryText, [eventId, req.user.id])
      .then(() => {
        res.sendStatus(204); // No content, successful deletion
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500); // Internal server error
      });
  } else {
    res.sendStatus(401); // Unauthorized
  }
});





module.exports = router;
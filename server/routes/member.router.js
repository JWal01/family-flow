const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('/member GET route');
  console.log('is authenticated?', req.isAuthenticated());
  if(req.isAuthenticated()) {
  console.log('user', req.user);
  let queryText = `SELECT * FROM "family_member" WHERE "user_id" = $1;`;
  pool.query(queryText, [req.user.id]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
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
  console.log('/member POST route');
  console.log(req.body);
  // req.isAuthenticated is a function provided
  // by passport. It returns either true or false. 
  console.log('is authenticated?', req.isAuthenticated());
  if(req.isAuthenticated()) {
      console.log('user', req.user);
      // Add the pet to our database
      let queryText = `INSERT INTO "family_member" ("member_name", "user_id") 
      VALUES ($1, $2);`;
    // ! req.user.id is the currently logged in users id  
    pool.query(queryText, [req.body.member_name, req.user.id])  
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

module.exports = router;
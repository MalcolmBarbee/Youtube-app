/* The purpose of this file is to enable new users.
Create user function takes in newUserName, makes sure it's unique
to userList, concats it to existing userList.
Returns error if not unique: "Sorry we already have a Mo, and he's unique.  
Please select another cool name."
*/

import React from 'react';

const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {
  const {name, email} = req.body;

  UserService.create(name, email)
    .then(() => {
      res.json({ success: `User with name: ${name} created.`});
    })
    .catch(err => {
      res.json(err.toString());
    })
});

// GET - READ USER
userRouter.get('/:id', (req, res) => {
  const {id} = req.params;

  UserService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.toString());
    })
});

// PUT - UPDATE USER
userRouter.put('/:id', (req, res) => {
  const {name, email} = req.body;
  const {id} = req.params;

  UserService.update(id, name, email)
    .then(() => {
      res.json({ success: `User with name: ${name} updated.`});
    })
    .catch(err => {
      res.json(err.toString());
    })
});


// DELETE - DELETE USER
userRouter.delete('/:id', (req, res) => {
  const {id} = req.params;

  UserService.delete(id)
    .then(() => {
      res.json({ success: `User with ID: ${id} deleted.`});
    })
    .catch(err => {
      res.json(err.toString());
    })
});


module.exports = userRouter;

export default user;
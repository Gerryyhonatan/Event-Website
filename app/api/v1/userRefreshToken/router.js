const express = require('express');
const router = express();
const { index } = require('./controller');
const {
  authenticateUser,
  authorizedRoles,
} = require('../../../middlewares/auth');

router.get(
  '/refresh-token/:refreshToken',
  // authenticateUser,
  // authorizeRoles('organizer', 'admin', 'owner'),
  index
);

module.exports = router;
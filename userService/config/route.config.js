const express = require('express');
const router = express.Router();
const userRouter = require('../routes/userRouter');

// Define your routes here
router.use('/api/users', userRouter);

module.exports = router;
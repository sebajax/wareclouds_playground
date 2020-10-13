// Module Imports
import express from 'express';

// Module Consts
const router = express.Router();

/* GET api status. */
router.get('/', (req, res) => {
  res.send('Warecloudes API status => Running');
});

export default router;

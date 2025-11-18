const express = require('express');
const axios = require('axios');

const router = express.Router();

const AUTH_URL = 'https://kmapi.baladia.gov.kw/km-adauth/api/Auth/login';

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'username and password are required' });
    }

    const adGroup = 'CMS';

    const response = await axios.post(
      AUTH_URL,
      { username, password, adGroup },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return res.status(response.status).send(response.data);
  } catch (err) {
    console.error('Auth error:', err.message);

    if (err.response) {
      return res.status(err.response.status).send(err.response.data);
    }

    return res.status(502).json({ error: 'Failed to reach auth service' });
  }
});

module.exports = router;

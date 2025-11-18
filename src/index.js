const express = require('express');
const { PORT } = require('./config');
const authRoute = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

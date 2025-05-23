const express = require('express');
const app = express();
const PORT = process.env.PORT; // Must use exactly this for IBM Code Engine

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create web server
// 1. Require express
const express = require('express');
// 2. Create an express object
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 5. Listen to the port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// 6. Run the server
// node comments.js
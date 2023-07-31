const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
})

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`)
}); //listens on port 3000 -> http://localhost:3000/

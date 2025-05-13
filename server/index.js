 
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Xin chào từ backend MindMirror!');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
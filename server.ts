import express from 'express';

const app = express();
const PORT = 1337;
app.get('/', (req, res) => res.send('Working'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
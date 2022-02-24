import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola Mundo!' });
});

app.listen(80, () => {
  console.log('Server is listening on port 80');
});

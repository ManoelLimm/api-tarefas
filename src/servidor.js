import express from 'express';
import tarefasRouter from './routes/tarefas.js';

const app = express();

app.use(express.json());

app.use('/api', tarefasRouter);

app.listen(3000, () => {
  console.log('Servidor On');
});

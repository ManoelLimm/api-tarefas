import express from 'express';
import connection from '../db.js';

const router = express.Router();

//rota de adicionar tarefa
router.post('/tarefa', (req, res) => {
  const { nome, status } = req.body;

  if (!nome || !status) {
    return res.status(400).json({ error: 'Nome e status são obrigatórios' });
  }

  const statusPermitidos = ['pendente', 'em andamento', 'concluída'];
  if (!statusPermitidos.includes(status)) {
    return res.status(400).json({
      error: "Status inválido. Use: 'pendente', 'em andamento' ou 'concluída'.",
    });
  }

  const query = 'INSERT INTO tarefas (nome, status) VALUES (?, ?)';

  connection.query(query, [nome, status], (err) => {
    if (err) {
      console.error('Erro ao adicionar tarefa:', err);
      return res.status(500).json({ error: 'Erro ao adicionar tarefa' });
    }
    res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
  });
});

//listar tarefas cadastradas
router.get('/tarefas', (req, res) => {
  const query = 'SELECT * FROM tarefas';

  connection.query(query, (err, resultado) => {
    if (err) {
      console.error('Erro ao buscar tarefas:', err);
      return res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
    res.json(resultado);
  });
});

//atualizar tarefa

router.put('/tarefa/:id', (req, res) => {
  const { id } = req.params;
  const { nome, status } = req.body;

  if (!nome && !status) {
    return res.status(400).json({ error: 'Nome ou status são obrigatórios' });
  }

  let query = 'UPDATE tarefas SET ';
  const values = [];

  // condição para não apagar a tarefa caso não seja passado nome ou status
  if (nome) {
    query += 'nome = ?, ';
    values.push(nome);
  }
  if (status) {
    query += 'status = ?, ';
    values.push(status);
  }

  query = query.slice(0, -2);
  query += ' WHERE id = ?';
  values.push(id);

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao atualizar tarefa:', err);
      return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ message: 'Tarefa atualizada com sucesso!' });
  });
});

//deletar tarefa
router.delete('/tarefa/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tarefas WHERE id = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar tarefa:', err);
      return res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ message: 'Tarefa deletada com sucesso!' });
  });
});

export default router;

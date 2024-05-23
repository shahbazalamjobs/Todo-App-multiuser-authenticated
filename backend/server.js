const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todoDB3',
  password: 'admin',
  port: 5432,
});

const JWT_SECRET_KEY = 'your_secret_key';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  if (!authHeader) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};

// User authentication routes
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
    res.json({ message: 'User signed up successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    const token = jwt.sign({ userId: result.rows[0].id, username: result.rows[0].username }, JWT_SECRET_KEY);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

// Routes for CRUD operations
app.get('/api/todos', verifyToken, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todos WHERE user_id = $1', [req.user.userId]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'An error occurred while fetching todos' });
  }
});

// Update a user-specific todo
app.put('/api/todos/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE todos SET title = $1, completed = $2 WHERE id = $3 AND user_id = $4 RETURNING *',
      [title, completed, id, req.user.userId]
    );
    if (rows.length === 0) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error updating user-specific todo:', error);
    res.status(500).json({ error: 'An error occurred while updating user-specific todo' });
  }
});



app.post('/api/todos', verifyToken, async (req, res) => {
  const { title } = req.body;
  try {
    console.log(req)

    const { rows } = await pool.query('INSERT INTO todos (user_id, title) VALUES ($1, $2) RETURNING *', [req.user.userId, title]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'An error occurred while adding todo' });
  }
});

app.delete('/api/todos/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM todos WHERE id = $1 AND user_id = $2', [id, req.user.userId]);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'An error occurred while deleting todo' });
  }
});


//  Routes for common todos
app.get('/api/common-todos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM common_todos');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching common todos:', error);
    res.status(500).json({ error: 'An error occurred while fetching common todos' });
  }
});

app.post('/api/common-todos', async (req, res) => {
  const { title } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO common_todos (title) VALUES ($1) RETURNING *', [title]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error adding common todo:', error);
    res.status(500).json({ error: 'An error occurred while adding common todo' });
  }
});

// Update a common todo
app.put('/api/common-todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE common_todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
      [title, completed, id]
    );
    if (rows.length === 0) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error updating common todo:', error);
    res.status(500).json({ error: 'An error occurred while updating common todo' });
  }
});

// Delete a common todo
app.delete('/api/common-todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM common_todos WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error('Error deleting common todo:', error);
    res.status(500).json({ error: 'An error occurred while deleting common todo' });
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

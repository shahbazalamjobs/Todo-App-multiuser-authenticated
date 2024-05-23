-- users 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- users todo

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false
);

-- common todos 

CREATE TABLE common_todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

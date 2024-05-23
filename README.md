# Todo App - PERN Stack

This is a simple Todo application built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js) with JWT authentication. It allows users to manage their personal todos in a secure manner, and also provides a common todos section that is accessible to all users.

## Features

- **User Authentication**: Secure signup and login using JWT.
- **Personal Todos**: Each user has their own private todo list.
- **Common Todos**: Open todo list accessible to all users.
- **CRUD Operations**: Users can create, read, update, and delete todos.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. **Backend Setup:**

    - Navigate to the backend directory:
    
        ```bash
        cd backend
        ```
    
    - Install dependencies:
    
        ```bash
        npm install
        ```
    
    - Set up the PostgreSQL database:
    
        - Create a PostgreSQL database.
        - Configure the database connection in the `.env` file (create one if it doesn't exist):
        
            ```env
            DB_USER=your_db_user
            DB_PASSWORD=your_db_password
            DB_HOST=your_db_host
            DB_PORT=your_db_port
            DB_DATABASE=your_db_name
            JWT_SECRET=your_jwt_secret
            ```
    
    - Run database migrations and seed data if any (assuming you have migrations set up):
    
        ```bash
        npx sequelize-cli db:migrate
        npx sequelize-cli db:seed:all
        ```
    
    - Start the backend server:
    
        ```bash
        npm start
        ```

3. **Frontend Setup:**

    - Navigate to the frontend directory:
    
        ```bash
        cd ../frontend
        ```
    
    - Install dependencies:
    
        ```bash
        npm install
        ```
    
    - Configure the backend API URL in the `.env` file (create one if it doesn't exist):
    
        ```env
        REACT_APP_API_URL=http://localhost:5000
        ```
    
    - Start the frontend development server:
    
        ```bash
        npm start
        ```

## Usage

- **Home**: General information about the app.
- **About**: Information about the app's purpose and features.
- **Contact**: Contact information or form.
- **Todos**: User-specific todo list. Requires authentication.
- **Common Todos**: Open todo list accessible to all users.

## API Endpoints

- **Authentication**:
    - `POST /api/auth/signup` - Signup a new user.
    - `POST /api/auth/login` - Login an existing user.
- **Personal Todos**:
    - `GET /api/todos` - Get user's todos. (Protected)
    - `POST /api/todos` - Create a new todo. (Protected)
    - `PUT /api/todos/:id` - Update a todo. (Protected)
    - `DELETE /api/todos/:id` - Delete a todo. (Protected)
- **Common Todos**:
    - `GET /api/common-todos` - Get all common todos.
    - `POST /api/common-todos` - Create a new common todo.
    - `PUT /api/common-todos/:id` - Update a common todo.
    - `DELETE /api/common-todos/:id` - Delete a common todo.

## Contributing

Feel free to contribute to this project by opening a pull request. Please follow the project's coding style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

**Note**: Ensure to replace placeholders (e.g., `yourusername`, `your_db_user`, etc.) with actual values specific to your setup.

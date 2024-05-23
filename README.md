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
    git clone https://github.com/shahbazalamjobs/Todo-App-multiuser-authenticated.git
    cd todo-app
    ```

2. **Backend Setup:**

    - Navigate to the backend directory:
    
        ```bash
        cd backend
        ```
    
    - Install dependencies:
    
        ```bash
        npm i bcrypt cors express jsonwebtoken nodemon pg
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
        REACT_APP_API_URL=http://localhost:5173
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


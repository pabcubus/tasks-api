# Tasks-api
This is a example of a task api done with:
- Node
- TypeScript
- Express
- Sequelize
- Docker
- MySQL

## Getting started
Make sure you have the following installed globally:

- GitHub
- Node

You clone this repo by doing 
  ```
  $ git clone https://github.com/pabcubus/tasks-api.git
  ```

Install dependencies
  ```
  $ cd tasks-api
  $ npm i
  ```

Install Docker containers
  ```
  $ npm run docker:compose
  ```

Run the migrations
  ```
  $ npx sequelize db:migrate
  ```

Run the API locally
  ```
  $ npm run dev
  ```

## How to interact
This project has 3 endpoints:
1. ```GET /auth/login``` to get a token for a user. You can test it with user and password as `user1`
2. ```GET /tasks``` to get all tasks.
3. ```POST /tasks``` to save a task to a username. The JSON body should be:
  ```
    {
      "title": "title 3",
      "description": "description 3"
      "username": "username"
    }
  ```
4. ```PUT /tasks/<task_id>``` to update a task from a task ID. The JSON body should be:
  ```
    {
      "title": "title 3",
      "description": "description 3"
      "username": "username"
    }
  ```
All of these requests has to be done with the Authorization flag in the headers like this:
  ```
    Authorization: Bearer <token>
  ```
This is with the token generated with `/auth/login`
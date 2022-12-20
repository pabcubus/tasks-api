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

Run the API locally
  ```
  $ npm run dev
  ```

## How to interact
This project has 3 endpoints:
1. ```GET /tasks``` to get all tasks
2. ```GET /tasks/<username>``` to get all tasks from a username
3. ```POST /tasks/<username>``` to save a task to a username. The JSON body should be:
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
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('tasks', 'admin', 'admin', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate();
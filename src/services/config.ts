import 'dotenv/config';
import { Sequelize } from 'sequelize'

const dbuser: string =  process.env.MYSQL_USER as string;
const dbpass: string =  process.env.MYSQL_PASS as string;

export const sequelize = new Sequelize('tasks', dbuser, dbpass, {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate();
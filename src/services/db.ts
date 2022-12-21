import { DataTypes, Model } from 'sequelize';
import { sequelize } from './config';

export interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Task extends Model {}
Task.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize, 
  modelName: 'tasks'
});

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  token: string;
  tokenExpiry: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class User extends Model<UserAttributes, UserAttributes> {}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  token: DataTypes.STRING,
  tokenExpiry: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize, 
  modelName: 'users'
});
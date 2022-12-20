import { DataTypes, Model } from 'sequelize';
import { sequelize } from './config';

export interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  username: string;
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
  username: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize, 
  modelName: 'tasks'
});
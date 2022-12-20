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

export interface TaskModel extends Model<TaskModel, TaskAttributes> {
  id: number
  title: string
  description: string
  username: string;
  createdAt: string
  updatedAt: string
}

export const Task = sequelize.define<TaskModel, TaskAttributes>('tasks', {
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
})
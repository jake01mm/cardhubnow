import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import User from './User.mjs';

const PointTransactions = sequelize.define('PointTransactions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  type: {
    type: DataTypes.ENUM,
    values: ['earn', 'redeem', 'adjustment'], // 根据需要定义类型
  },
  description: {
    type: DataTypes.STRING(255),
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'PointTransactions',
  timestamps: false,
});

export default PointTransactions;
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import User from './User.mjs';
import GiftCards from './GiftCards.mjs';

const Transactions = sequelize.define('Transactions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  gift_card_id: {
    type: DataTypes.INTEGER,
    references: {
      model: GiftCards,
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'completed', 'failed'], // 根据需要定义状态
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Transactions',
  timestamps: false,
});

export default Transactions;
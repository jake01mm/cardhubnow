import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import Wallets from './Wallets.mjs';
import User from './User.mjs';

const WalletTransactions = sequelize.define('WalletTransactions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  wallet_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Wallets,
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  type: {
    type: DataTypes.ENUM,
    values: ['deposit', 'withdraw', 'payment', 'refund'], // 根据需要定义类型
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  description: {
    type: DataTypes.STRING(255),
  },
  transaction_id: {
    type: DataTypes.STRING(50),
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'completed', 'failed'], // 根据需要定义状态
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'WalletTransactions',
  timestamps: false,
});

export default WalletTransactions;
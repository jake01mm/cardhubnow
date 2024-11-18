import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import User from './User.mjs';

const VerificationCodes = sequelize.define('VerificationCodes', {
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
  code: {
    type: DataTypes.STRING(6),
  },
  type: {
    type: DataTypes.ENUM,
    values: ['email', 'sms'], // 根据需要定义类型
  },
  expires_at: {
    type: DataTypes.DATE,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'VerificationCodes',
  timestamps: false,
});

export default VerificationCodes;
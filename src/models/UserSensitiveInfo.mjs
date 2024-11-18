import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import User from './User.mjs';

const UserSensitiveInfo = sequelize.define('UserSensitiveInfo', {
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
  bank_account: {
    type: DataTypes.STRING(255),
  },
  bank_name: {
    type: DataTypes.STRING(100),
  },
  kyc_document_url: {
    type: DataTypes.STRING(255),
  },
  kyc_status: {
    type: DataTypes.ENUM,
    values: ['pending', 'verified', 'rejected'], // 根据需要定义状态
  },
  whatsapp_number: {
    type: DataTypes.STRING(20),
  },
  whatsapp_status: {
    type: DataTypes.ENUM,
    values: ['active', 'inactive'], // 根据需要定义状态
  },
  hash_value: {
    type: DataTypes.STRING(255),
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
  tableName: 'UserSensitiveInfo',
  timestamps: false,
});

export default UserSensitiveInfo;
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import User from './User.mjs';

const UserProfiles = sequelize.define('UserProfiles', {
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
  full_name: {
    type: DataTypes.STRING(100),
  },
  avatar_url: {
    type: DataTypes.STRING(255),
  },
  bio: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.STRING(100),
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
  tableName: 'UserProfiles',
  timestamps: false,
});

export default UserProfiles;
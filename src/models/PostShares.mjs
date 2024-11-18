import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';
import Posts from './Posts.mjs';
import User from './User.mjs';

const PostShares = sequelize.define('PostShares', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Posts,
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
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'PostShares',
  timestamps: false,
});

export default PostShares;
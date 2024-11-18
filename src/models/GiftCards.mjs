import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

const GiftCards = sequelize.define('GiftCards', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING(50),
  },
  country: {
    type: DataTypes.STRING(50),
  },
  min: {
    type: DataTypes.DECIMAL(10, 2),
  },
  max: {
    type: DataTypes.DECIMAL(10, 2),
  },
  nairarate: {
    type: DataTypes.DECIMAL(5, 2),
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'GiftCards',
  timestamps: false,
});

export default GiftCards;
// src/config/database.mjs
import { Sequelize } from 'sequelize';
import { dbConfig } from './dbConfig.mjs'; // 确保导入 dbConfig

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql', // 或者其他数据库类型
});

export default sequelize; // 导出 sequelize 实例
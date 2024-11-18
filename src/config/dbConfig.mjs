// src/config/dbConfig.mjs

// 加载环境变量
import dotenv from 'dotenv'; // 引入 dotenv 库以加载环境变量
dotenv.config(); // 加载 .env 文件中的环境变量

// 数据库连接配置
export const dbConfig = {
  host: process.env.DB_HOST, // 数据库主机
  port: process.env.DB_PORT, // 数据库端口
  user: process.env.DB_USER, // 数据库用户名
  password: process.env.DB_PASSWORD, // 数据库密码
  database: process.env.DB_NAME, // 数据库名称
};


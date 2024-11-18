import { Sequelize } from 'sequelize'; // 确保 Sequelize 正确导入
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 动态解析 .env 文件的路径（假设 .env 文件在项目根目录）
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// 打印环境变量以进行调试
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST) {
  console.error('❌ 环境变量未正确加载，请检查 .env 文件路径和内容。');
  process.exit(1);
}

console.log('环境变量加载成功:');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '*** (隐藏)' : '未设置');
console.log('DB_HOST:', process.env.DB_HOST);

// 创建 Sequelize 实例
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: console.log, // 启用查询日志（可选）
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    console.error('详细错误:', error);
    process.exit(1);
  }
}

testConnection();

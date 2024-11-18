// src/server.mjs

// 导入模块
import { createServer } from 'node:http'; // 引入 Node.js 的 HTTP 模块
import mysql from 'mysql2/promise'; // 引入 mysql2 库以支持 Promise
import { dbConfig } from './config/dbConfig.mjs'; // 导入数据库配置

// 测试数据库连接
async function testDatabaseConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig); // 创建数据库连接
    console.log('✅ Database connection successful!'); // 连接成功的消息
    await connection.end(); // 关闭连接
  } catch (error) {
    console.error('❌ Database connection failed:', error.message); // 连接失败的错误消息
    process.exit(1); // 数据库连接失败时退出程序
  }
}

// 创建 HTTP 服务器
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 设置响应头
  res.end('Hello World!\n'); // 发送响应内容
});

// 启动服务器
const PORT = 3000; // 服务器端口
const HOST = '127.0.0.1'; // 服务器主机

async function startServer() {
  // 测试数据库连接
  await testDatabaseConnection();

  // 启动 HTTP 服务器
  server.listen(PORT, HOST, () => {
    console.log(`🌐 Server running at http://${HOST}:${PORT}/`); // 服务器启动成功的消息
  });
}

startServer(); // 启动服务器
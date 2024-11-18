import { Sequelize } from 'sequelize';
import { resolve } from 'path';

// 导入各个模型
import initUsers from './User.mjs';
import initUserSensitiveInfo from './UserSensitiveInfo.mjs';
import initUserProfiles from './UserProfiles.mjs';
import initVerificationCodes from './VerificationCodes.mjs';
import initGiftCards from './GiftCards.mjs';
import initTransactions from './Transactions.mjs';
import initPosts from './Posts.mjs';
import initPostLikes from './PostLikes.mjs';
import initPostShares from './PostShares.mjs';
import initMessages from './Messages.mjs';
import initUserPoints from './UserPoints.mjs';
import initPointTransactions from './PointTransactions.mjs';
import initWallets from './Wallets.mjs';
import initWalletTransactions from './WalletTransactions.mjs';

// 初始化 Sequelize 实例
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
});

// 初始化模型
const models = {
    Users: initUsers(sequelize),
    UserSensitiveInfo: initUserSensitiveInfo(sequelize),
    UserProfiles: initUserProfiles(sequelize),
    VerificationCodes: initVerificationCodes(sequelize),
    GiftCards: initGiftCards(sequelize),
    Transactions: initTransactions(sequelize),
    Posts: initPosts(sequelize),
    PostLikes: initPostLikes(sequelize),
    PostShares: initPostShares(sequelize),
    Messages: initMessages(sequelize),
    UserPoints: initUserPoints(sequelize),
    PointTransactions: initPointTransactions(sequelize),
    Wallets: initWallets(sequelize),
    WalletTransactions: initWalletTransactions(sequelize),
};

// 模型关联逻辑
const { 
    Users, 
    UserSensitiveInfo, 
    UserProfiles, 
    VerificationCodes, 
    GiftCards, 
    Transactions, 
    Posts, 
    PostLikes, 
    PostShares, 
    Messages, 
    UserPoints, 
    PointTransactions, 
    Wallets, 
    WalletTransactions 
} = models;

// Users 和其他表
Users.hasOne(UserSensitiveInfo, { foreignKey: 'user_id' });
UserSensitiveInfo.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasOne(UserProfiles, { foreignKey: 'user_id' });
UserProfiles.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(VerificationCodes, { foreignKey: 'user_id' });
VerificationCodes.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(Transactions, { foreignKey: 'buyer_id', as: 'Buyer' });
Users.hasMany(Transactions, { foreignKey: 'seller_id', as: 'Seller' });
Transactions.belongsTo(Users, { foreignKey: 'buyer_id', as: 'Buyer' });
Transactions.belongsTo(Users, { foreignKey: 'seller_id', as: 'Seller' });

Users.hasMany(Posts, { foreignKey: 'user_id' });
Posts.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(Messages, { foreignKey: 'sender_id', as: 'Sender' });
Users.hasMany(Messages, { foreignKey: 'receiver_id', as: 'Receiver' });
Messages.belongsTo(Users, { foreignKey: 'sender_id', as: 'Sender' });
Messages.belongsTo(Users, { foreignKey: 'receiver_id', as: 'Receiver' });

Users.hasOne(UserPoints, { foreignKey: 'user_id' });
UserPoints.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(PointTransactions, { foreignKey: 'user_id' });
PointTransactions.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasOne(Wallets, { foreignKey: 'user_id' });
Wallets.belongsTo(Users, { foreignKey: 'user_id' });

Wallets.hasMany(WalletTransactions, { foreignKey: 'wallet_id' });
WalletTransactions.belongsTo(Wallets, { foreignKey: 'wallet_id' });

// GiftCards 和 Transactions
GiftCards.hasMany(Transactions, { foreignKey: 'gift_card_id' });
Transactions.belongsTo(GiftCards, { foreignKey: 'gift_card_id' });

// Posts 与 Likes、Shares
Posts.hasMany(PostLikes, { foreignKey: 'post_id' });
PostLikes.belongsTo(Posts, { foreignKey: 'post_id' });

Posts.hasMany(PostShares, { foreignKey: 'post_id' });
PostShares.belongsTo(Posts, { foreignKey: 'post_id' });

// 将 sequelize 和 models 导出
export { sequelize, models };

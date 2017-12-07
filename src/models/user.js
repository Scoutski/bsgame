const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const database = require('../../config/database');

const User = database.define('users', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  realName: {
    type: Sequelize.STRING,
    allowNull: true,
    field: 'real_name'
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'display_name',
    defaultValue: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    field: 'is_admin',
    defaultValue: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'updated_at'
  },
  deletedAt: {
    type: Sequelize.DATE,
    field: 'deleted_at'
  },
}, {
  paranoid: true,
  timestamps: true,
  tableName: 'users',
});

User.prototype.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;

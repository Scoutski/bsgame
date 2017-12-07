const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'real_name'
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'display_name'
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_admin'
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at'
      }
    }, {
        paranoid: true,
        tableName: 'users',
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validatePassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });

    return User;
}
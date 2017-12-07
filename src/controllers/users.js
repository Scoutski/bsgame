const User = require('../models/user');

module.exports = {
  create: async (details) => {
    const new = await User.create(details);
    return new.dataValues;
  }
}
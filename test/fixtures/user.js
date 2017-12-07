const uuid = require('uuid');

module.exports = () => ({
  email: `${uuid.v4()}@example.com`,
  password: 'password',
  displayName: 'testUser',
});

const test = require('ava');
const bcrypt = require('bcrypt');

const setup = require('../../config/setup');
const User = require('../../src/models/user');
const userFixture = require('../fixtures/user');

test.before('setup database', async () => {
  await setup();
});

test('user model exists', (t) => {
  t.true(User !== null || User !== undefined);
});

test('can successfully create a user', async (t) => {
  const fixture = userFixture();
  const user = (await User.create(fixture)).dataValues;
  t.true(user.email === fixture.email);
});

test('salts a password', async (t) => {
  const fixture = userFixture();
  const password = await bcrypt.hash(fixture.password, bcrypt.genSaltSync(8));
  const user = await User.create(Object.assign({}, fixture, { password }));
  const isPasswordValid = await user.validatePassword(fixture.password);
  t.true(isPasswordValid === true);
});

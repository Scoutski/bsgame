const User = require('../../src/models/user');
const test = require('ava');

// describe('user model', () => {
//   it('must exist', () => {
//     expect(User).to.not.equal(null);
//   });
// });

test('user model exists', (t) => {
  t.true(User !== null || User !== undefined);
});

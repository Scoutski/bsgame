const database = require('../config/database');

const sleep = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const dbSetup = async () => {
  try {
    await database.authenticate();
  } catch (e) {
    await sleep(1000);
    return dbSetup();
  }

  return null;
};

module.exports = dbSetup;

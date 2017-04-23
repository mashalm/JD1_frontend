module.exports = {
  createUser: require('./createUser'),
  findUserById: require('./findUser').findUserById,
  findUserByEmail: require('./findUser').findUserByEmail,
  updateUserPassword: require('./updateUserPassword'),
  saveTestResult: require('./saveTestResult')
};

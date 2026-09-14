const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function hashPassword(plain) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plain, salt);
}
console.log('Xavfsizlik moduli tayyor.');

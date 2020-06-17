const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
// signup시 비밀번호 받아오면 이를 암호화하기
// salt 도 db에 함께 저장해야 함

module.exports = {
  signIn: (req, res) => {},
  signUp: async (req, res) => {
    const { email, password, nickname } = req.body;

    const salt = crypto.randomBytes(32).toString('base64');
    crypto.pbkdf2(password, salt, 103845, 64, 'sha512', (err, key) => {
      if (err) throw err;

      User.create({
        email, password: key.toString('hex'), salt, nickname,
      })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.json(err));
    });
  },
};

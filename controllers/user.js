const crypto = require('crypto');
const { User } = require('../models');
// signup시 비밀번호 받아오면 이를 암호화하기 // salt 사용하기

module.exports = {
  signIn: (req, res) => {},
  signUp: (req, res) => {
    const { email, password, nickname } = req.body;
    User.create({ email, password, nickname })
      .then((data) => res.send(data))
      .catch((err) => res.send(err))
  },
};

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

function extractId(email) {
  const idx = email.indexOf('@');
  return email.substr(0, idx);
}

module.exports = {
  signIn: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((instance) => {
        crypto.pbkdf2(password, instance.salt, 103845, 64, 'sha512', async (err, key) => {
          if (err) throw err;
          if (key.toString('hex') === instance.password) {
            const token = jwt.sign({ email }, 'shhhhh');
            res.status(200).json({ token });
          } else {
            res.json({ result: 'wrong user info' });
          }
        });
      });
  },

  signUp: (req, res) => {
    // eslint-disable-next-line prefer-const
    let { email, password, nickname } = req.body;

    if (!nickname) {
      nickname = extractId(email);
    }

    const salt = crypto.randomBytes(32).toString('base64');
    crypto.pbkdf2(password, salt, 103845, 64, 'sha512', async (err, key) => {
      if (err) throw err;

      User.findOrCreate({ where: { email }, defaults: { password: key.toString('hex'), salt, nickname } })
        .spread((instance, created) => {
          res.status(200).json({ instance, created });
        })
        .catch((err) => res.json(err));
    });
  },

  profileUpdate: (req, res) => {
    let { nickname, weight, goal } = req.body;
    // hardcoding for testing
    const email = 'kim@naver.com';

    if (!nickname) { nickname = extractId(email); }
    if (!weight) { weight = null; }
    if (!goal) { goal = 2000; }

    User.update({ nickname, weight, goal }, { where: { email } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },
};

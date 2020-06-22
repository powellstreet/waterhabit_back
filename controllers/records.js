const { Records } = require('../models');

module.exports = {
  updateStamp: (req, res) => {
    const day = 1;
    Records.findOrCreate({ where: { userId: 1, day } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },
};

const { Records } = require('../models');

module.exports = {
  getStamp: (req, res) => {
    const { userId } = req.body;
    Records.findAll({ where: { userId } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },

  updateStamp: (req, res) => {
    const { day } = req.body;
    Records.findOrCreate({ where: { userId: 1, day } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },
};

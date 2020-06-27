const { Records } = require('../models');

module.exports = {
  checkIntake: (req, res) => {
    const { userId, day } = req.body;
    Records.findOrCreate({ where: { userId, day } })
      .spread((instance, created) => res.status(200).json({ instance, created }))
      .catch((err) => res.json(err));
  },

  updateIntake: (req, res) => {
    const { userId, intake, day } = req.body;

    Records.update({ intake }, { where: { userId, day } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },

  getStamp: (req, res) => {
    const { userId } = req.body;
    Records.findAll({ where: { userId } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },

  updateStamp: (req, res) => {
    const { userId, day } = req.body;

    Records.update({ achieved: true }, { where: { userId, day } })
      .then((instance) => res.status(200).json(instance))
      .catch((err) => res.json(err));
  },
};

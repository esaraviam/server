const { request, response } = require('express');
const Discounts = require('../models/discounts.model');

const findAll = (request, response) => {
  Discounts.find({})
    .then((discounts) => {
      response.status(200).send(discounts);
    })
    .catch((error) => {
      response.status(500).send(error);
    });
};

module.exports = {
  findAll,
};

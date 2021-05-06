const { request, response } = require('express');
const Product = require('../models/products.model');

const findAll = (request, response) => {
  try {
    Product.find({})
      .then((productsList) => {
        response.status(200).json({ productsList });
      })
      .catch((error) => {
        response.status(500).send({ error: error.message });
      });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};

const findByID = (request, response) => {
  let id = request.params.id;
  Product.findOne({ id })
    .then((product) => {
      response.status(200).json(product);
    })
    .catch((error) => {
      response.status(500).send({ error: error.message });
    });
};

module.exports = {
  findAll,
  findByID,
};

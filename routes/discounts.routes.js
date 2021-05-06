const { Router } = require('express');
const discountController = require('../controllers/discounts.controller');

const router = Router();

router.get('/', discountController.findAll);

module.exports = router;

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', (req, res, next) => dataController.getAllItems(req, res, next));
router.get('/:id', (req, res, next) => dataController.getItemById(req, res, next));
router.post('/', (req, res, next) => dataController.createItem(req, res, next));

module.exports = router;
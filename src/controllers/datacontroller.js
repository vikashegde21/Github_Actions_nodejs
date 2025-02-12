const DataService = require('../services/dataService');

class DataController {
  constructor() {
    this.dataService = new DataService();
  }

  async getAllItems(req, res, next) {
    try {
      const items = await this.dataService.getAllItems();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const item = await this.dataService.getItemById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      const item = await this.dataService.createItem(req.body);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DataController();
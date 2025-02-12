const DataItem = require('../models/dataModel');

class DataService {
  constructor() {
    this.items = new Map();
  }

  async getAllItems() {
    return Array.from(this.items.values());
  }

  async getItemById(id) {
    return this.items.get(id);
  }

  async createItem(data) {
    const id = Date.now().toString();
    const item = new DataItem(id, data.name, data.isActive);
    this.items.set(id, item);
    return item;
  }
}

module.exports = DataService;

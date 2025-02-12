// src/models/dataModel.js
class DataItem {
    constructor(id, name, isActive = true) {
      this.id = id;
      this.name = name;
      this.isActive = isActive;
      this.createdAt = new Date();
    }
  }
  
  module.exports = DataItem;
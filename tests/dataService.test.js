const DataService = require('../src/services/dataService');

describe('DataService', () => {
  let service;

  beforeEach(() => {
    service = new DataService();
  });

  test('should create a new item', async () => {
    const data = { name: 'Test Item', isActive: true };
    const item = await service.createItem(data);

    expect(item.name).toBe(data.name);
    expect(item.isActive).toBe(data.isActive);
    expect(item.id).toBeDefined();
  });

  test('should get all items', async () => {
    await service.createItem({ name: 'Item 1' });
    await service.createItem({ name: 'Item 2' });

    const items = await service.getAllItems();
    expect(items.length).toBe(2);
  });

  test('should get item by id', async () => {
    const data = { name: 'Test Item' };
    const created = await service.createItem(data);
    const found = await service.getItemById(created.id);

    expect(found).toBeDefined();
    expect(found.name).toBe(data.name);
  });
});

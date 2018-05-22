import { generateList } from '../testHelpers/dataGenerators';
import faker from 'faker';

describe('Data Generators', () => {

  describe('generateList', () => {
    let item = faker.lorem.word();

    it('should throw an error when no item provided', () => {
      expect(() => generateList()).toThrow('item is required')
    });

    it('should return an array', () => {
      const result = generateList(item);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should set count=4 by default', () => {
      expect(generateList(item)).toHaveLength(4);
    });

    it('should return correct items count', () => {
      const result = generateList(item, 2);
      expect(result).toHaveLength(2);
    });
  });

});

const { add, subtract, multiply, divide } = require('../calculator');

describe('calculator functions', () => {
  describe('addition', () => {
    test('2 + 3 === 5 (example from image)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('handles negative and float values', () => {
      expect(add(-1, 1)).toBe(0);
      expect(add(2.5, 0.5)).toBeCloseTo(3.0);
    });
  });

  describe('subtraction', () => {
    test('10 - 4 === 6 (example from image)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('handles negative and float results', () => {
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe('multiplication', () => {
    test('45 * 2 === 90 (example from image)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('handles zero and negative', () => {
      expect(multiply(0, 123)).toBe(0);
      expect(multiply(-3, 3)).toBe(-9);
    });
  });

  describe('division', () => {
    test('20 / 5 === 4 (example from image)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('handles floating point division', () => {
      expect(divide(7, 2)).toBeCloseTo(3.5);
    });

    test('throws on division by zero', () => {
      expect(() => divide(1, 0)).toThrow('Division by zero');
    });
  });
});

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('modulo', () => {
    test('5 % 2 === 1 (example from image)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('handles negative and float values', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(-5, 2)).toBe(-1);
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('throws on modulo by zero', () => {
      expect(() => modulo(1, 0)).toThrow('Modulo by zero');
    });
  });

  describe('power', () => {
    test('2 ^ 8 === 256 (from earlier example)', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('handles negative exponents and zero', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
      expect(power(0, 0)).toBe(1); // Math.pow(0,0) -> 1
    });
  });

  describe('squareRoot', () => {
    test('sqrt 16 === 4 (example from image)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('handles non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2));
    });

    test('throws on negative input', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative number');
    });
  });
});

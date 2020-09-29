const sum = require('./sum.js');

test('adds two numbers to make sure Jest is working properly', () => {
  expect(sum(1, 2)).toBe(3);
});
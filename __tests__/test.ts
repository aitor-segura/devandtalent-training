const sum = (...args) => args.reduce((prev, item) => item + prev, 0);

test('Test', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(1, 2, 3, 4)).toBe(10);
});

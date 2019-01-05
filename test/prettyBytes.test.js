const expect = require('expect');
const {prettyBytes} = require('./_30s.js');

test('prettyBytes is a Function', () => {
  expect(prettyBytes).toBeInstanceOf(Function);
});
test('Converts a number in bytes to a human-readable string.', () => {
  expect(prettyBytes(1024)).toBe('1 KB');
});
test('Converts a number in bytes to a human-readable string.', () => {
  expect(prettyBytes(-27145424323.5821, 5)).toBe('-25.281 GB');
});
test('Converts a number in bytes to a human-readable string.', () => {
  expect(prettyBytes(123456789, 3, false)).toBe('118MB');
});
test('Converts a number in bytes to a human-readable string.', () => {
  expect(prettyBytes(0, 3, false)).toBe('0B');
});
test('Converts a number in bytes to a human-readable string.', () => {
  expect(prettyBytes(0, 3, true)).toBe('0 B');
});

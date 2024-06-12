const reverseStringLinkedList = require('./reverse_string_linklist');

test('Reversing a string', () => {
  expect(reverseStringLinkedList('Hello')).toBe('olleH');
  expect(reverseStringLinkedList('JavaScript')).toBe('tpircSavaJ');
  expect(reverseStringLinkedList('12345')).toBe('54321');
});

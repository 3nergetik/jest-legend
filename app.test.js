import checkHealth from '../src/index.js';

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Петя', health: 90 });

  expect(result).toBe('Петя is healthy');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Вася', health: 50 });

  expect(result).toBe('Вася is wounded');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Ваня', health: 10 });

  expect(result).toBe('Ваня is critical');
});
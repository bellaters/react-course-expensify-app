const add = (a, b) => a+b;
const generateGreeting = (name = 'Anonymus') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Isabel');
    expect(result).toBe('Hello Isabel!');
});

test('should generate greeting with Anonymus', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymus!');
});


const sum = require('./user');
test('Expect 50 + 50 equal 100',()=>{
    expect(sum(50,50)).toBe(100);
})
// NOT TO BE merger
test('Expect 2 + 2 NOT TO BE 5',()=>{
    expect(sum(2,2)).not.toBe(5);
})
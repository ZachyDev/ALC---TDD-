// import the function  methods
const functions  = require('./index');
// start a test case for addition
test('Add 2 + 2 equal to 4',()=>{
    expect(functions.add(10,20)).toBe(30);
});
// test case for multiplication
test('Multiply 10 * 20 equal to 200',()=>{
    expect(functions.product(10,20)).toBe(200);
})
// toBeNull merger
test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
})
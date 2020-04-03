// import the function  methods
const functions  = require('./index');
// start a test case for addition
// toBe
test('Add 2 + 2 equal to 4',()=>{
    expect(functions.add(10,20)).toBe(30);
});
// test case for multiplication
test('Multiply 10 * 20 equal to 200',()=>{
    expect(functions.product(10,20)).toBe(200);
})
// toBeNull matcher
test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
})
// toBeFalsy matcher
test('Should be falsy',()=>{
    expect(functions.checkValue(0)).toBeFalsy();
})
// toEqual
test('Should be an object with first and lastname',()=>{
    expect(functions.createUser()).toEqual({
        firstName:'Zachy',
        lastName:'Moseti'
    });
});
// less than and greater than
test('Should  be less tahn 2000',()=>{
    // declare two variables
    let num1 = 1000;
    let num2 = 800;
    expect(num1+num2).toBeLessThan(2000);
});
// Regex
test('There should not be w in boy',()=>{
    expect('boy').not.toMatch(/W/i);

});
// arrays
test('admin should be in username',()=>{
    let usernames = ['moseti','doroh','admin'];
    expect(usernames).toContain('admin');
});
// promise
// test('Expect name to be Graham ',()=>{
//     expect.assertions(1);
//     functions.fetchUser().then(data=>{
//         expect(data.name),toEqual('Graham');
//     });
// });
// reverse string
test('reverse string function exists',()=>{
    expect(functions.reverseString).toBeDefined();
});
// test('should reverse',()=>{
//     expect(functions.reverseString('hello')).toEqual('olleh');
// })

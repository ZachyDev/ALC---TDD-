// import login function
const login = require('./login');
// start your teat cases
test('Admin name and password should not be null',()=>{
    expect(login.adminLogin('moseti',1234)).not.toBeNull();
})
// define an object of methods
// const axios = require('axios');
const functions = {
    add : (a,b) => a +b,
    product: (a,b) => a * b,
    isNull: () => null,
    checkValue: x => x,
    createUser: ()=>{
        const user = {
             firstName: 'Zachy',
             lastName: 'Moseti',
    }
    return user;
    },
    fetchUser: ()=>{
        axios.get()
                .then(res=>res.data)
                .catch(err=>'error')
    },
   reverseString: (str) =>{
       str
            .split()
            .reverse()
            .join();
   }
}
// export the functions
module.exports = functions;

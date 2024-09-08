const account_Id = 143324
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

/* account_Id = 2 //we can't change the constants */

accountEmail = "hc@hc.com"
accountCity = "Hyderabad"
accountPassword = "2121212"

console.log(account_Id);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//will show the related contents in the form of the table
console.table([account_Id,accountEmail,accountCity,accountPassword])
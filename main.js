// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
//Kata 0: An example kata

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})

printKata(0, greenEyes1)

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.


let activeUsers = users
    .filter(user => user.isActive === true);

let isActive = [];

activeUsers.map(user => isActive.push(user.name + "  active now in company " + user.company + "."));
printKata(1, isActive);




// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.


let emailAddress = [];

users.map(user => emailAddress.push(user.name + "'s email is : " + user.email + "."));

printKata(2, emailAddress);



// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".


let isOvation = ["Not working in company 'OVATION'"];

let inquire = users.some(user => user.company === "OVATION");

if (inquire === true) {
    isOvation = [" One person working in company 'OVATION'"]
}
printKata(3, isOvation);



// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38. 


let user38 = users.find(user => user.age === 38);

let user38first = [];

let str = user38.name + " first user with the age over 38.";

user38first.push(str);

printKata(4, user38first);



// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.


let userActiveOver38 = users
    .filter(user => user.age > 38)
    .find(user => user.isActive === true);

if (userActiveOver38 === undefined) {
    userActiveOver38 = ['No active user age > 38'];
}

printKata(5, userActiveOver38);



// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.


let balanceZENCO = users
    .filter(user => user.company === 'ZENCO')

let balanceZENCOnewRep = [];

balanceZENCO.map(user => balanceZENCOnewRep.push("Balance of " + user.name + " who is working in company " + user.company + " is: " + user.balance + "."))

printKata(6, balanceZENCOnewRep);



// Kata 7 Age of every user with the "fugiat" tag.


let fugiat = users
    .filter(user => user.tags.includes('fugiat'))

let fugiatAge = [];

fugiat.map(user => fugiatAge.push(user.name + ", has the tag 'fugiat', is " + user.age + " years old."));

printKata(7, fugiatAge);






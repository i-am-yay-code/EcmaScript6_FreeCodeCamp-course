// Attention, please! This code is not finished yet )


console.log("Hi, it`s ecmascript 6!!!")



// 1.--------- Destructuring objects------------
//

/*
const personaInfo = {
    firstName: "Anton",
    lastName: "Yay",
    city: "Rivne",
    postalCode: "33245"
}

const { firstName: fn, lastName: ln } = personaInfo;
console.log(`He is ${fn} ${ln}`);
*/

// 2.---------- Destructing arrays----------
//

/*
let [firstName, middleName, lastName] = ["Volodimir", "Jack", "Sparrow"];

console.log(`He is ${firstName}-${middleName} ${lastName}`);
*/


// 3. --------Object literal-------
//


/*
function addresMaker(city, state) {
    const newAdress = { newCity: city, newState: state };
    console.log(newAdress);
}

function addresMaker2(city, state) {
    const newAdress = { city, state };
    console.log(newAdress);
}

addresMaker("Austin", "Texas");
addresMaker2("Austin", "Texas");
*/


// 4. ------------Object Literal (combining)----------
//Now we will try to combine all we know about ES6


/*
function addressMakerCombine(address) {
    const { city, state } = address;
    const newAdress = {
        city,
        state,
        country: "United States"
    };
    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`);
}

addressMakerCombine({ city: "Austin", state: "Texas" });


*/

//------------ 5. For of loop-------------
//

/*
let fullName = "Boris Johnson"

for (const char of fullName) {
    console.log(char);
}
*/

//------------ 6. Spread operator-------------
//


/*
let example1 = [1, 2, 3, 4, 5];
let example2 = [0, ...example1];

console.log(example2);
*/


//-----------7. Rest operator-----------------


/*
function add(...nums) {

    console.log(nums);
}

add(4, 5, 6, 7, 8) // returns logged array
*/


// -----------8. Arrow functions ------------
//


/*
const addArrow = (...nums) => {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}

addArrow(4, 5, 6, 7, 8) // returns logged array
*/


//-----------9. Default params------------------
//


/*
const funWithDefault = (numArray = []) => {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    });

    console.log(total);
}

funWithDefault(); // returns Uncaught TypeError TypeError (without default parameter for numArray)
*/


//---------- 10. Includes -----------------
//


/*
let numArray = [1, 2, 3, 4, 5];

console.log(numArray.indexOf(0)); // returns -1

// use include() instead

console.log(numArray.includes(0)); // returns false
console.log(numArray.includes(1)); // returns true
*/


// ------------------ 11. Let & const --------------------
//

/*
if (false) {
    var example = 5;
}
console.log(example); // returns undefined and could cause problems

// always use let instead

if (false) {
    let exampleLet = 5;
}
console.log(exampleLet); // Not defined

const example3 = 5;
example3 = 3; // TypeError: Assignment to constant variable
const exampleArr = [];


exampleArr.push(1); // It`s OK
exampleArr = [1, 2]; // TypeError: Assignment to constant variable
console.log(exampleArr)
*/

// --------------- 12. Import & export-------------------
//
/*
import { data } from "./importModule.js";

console.log(data);
data.push(12);
console.log(data);
*/

// ---------------- 13. padStart() & padEnd()-------------------
//


/*
let example = "Dylan";

console.log(example.padStart(10, 'a'));
*/

// ---------------- 14. padStart() & padEnd() (challenge)-------------------
//

/*
let example = "https://www.youtube.com/"

console.log(example.length)
console.log(example.padStart(100));
console.log(example.padStart(100).length);
console.log(example.padEnd(1).length); // ignoring padEnd()
*/

// ----------------- 15. Classes -----------------------
//


/*
import { Animal } from "./animal.js";

let cat = new Animal("Cat", 4);

cat.legs = 3;
console.log(cat);
cat.makeNoise("Meou");

console.log(Animal.return10());

console.log(cat.metaData);

*/


// -------------- 16. Trailing Commas -------------
//


/*
function add(param1,) {
    const example = {
        name: "Dylan",
    }
    console.log(example);
}

add(2);
*/


// ----------------17. Async & Await ----------------
//

import fetch from "node-fetch";

let apiUrl = "https://api.github.com/users/i-am-yay-code"
let brokenApiUrl = "1234https://api.github.com/users/i-am-yay-code"



// Without async & await
/* 
function getAvatarURL(url) {
    fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json.avatar_url))
        .catch((error) => {
            console.log("Error :(");
        })
}
*/


/*
async function getAvatarURL(url) {

    const response = await fetch(url);
    const json = await response.json();

    console.log(json.avatar_url);

}

getAvatarURL(apiUrl);
getAvatarURL(brokenApiUrl); // returns an error in case with async function
*/

// ----------------18. Async & Await ----------------
//
/* 
function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved");
        }, 3000)
    });
}
 */
/* 
resolveAfter3Seconds()
    .then((data) => console.log(data));

 */

/* 
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();

*/
// ------------------ 19. Sets ----------------------
// 

const exampleSet = new Set([1, 1, 1, 1, 1, 1, 2, 3]);

console.log(`Size = ${exampleSet.size}`);
console.log("All the elems:");
exampleSet.forEach((elem) => console.log(elem));

exampleSet.add(5);
console.log(`has(5)? = ${exampleSet.has(5)}`);

exampleSet.clear();
console.log(`Size = ${exampleSet.size}`);


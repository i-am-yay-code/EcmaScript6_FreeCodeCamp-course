


console.log("Hi, it`s ecmascript 6!!!")



// 1.--------- Destructuring objects------------
//
const personaInfo = {
    firstName: "Anton",
    lastName: "Yay",
    city: "Rivne",
    postalCode: "33245"
}

const { firstName: fn, lastName: ln } = personaInfo;
//console.log(`He is ${fn} ${ln}`);


// 2.---------- Destructing arrays----------
//
let [firstName, middleName, lastName] = ["Volodimir", "Jack", "Sparrow"];

//console.log(`He is ${firstName}-${middleName} ${lastName}`);

// 3. --------Object literal-------
//
function addresMaker(city, state) {
    const newAdress = { newCity: city, newState: state };
    console.log(newAdress);
}

function addresMaker2(city, state) {
    const newAdress = { city, state };
    console.log(newAdress);
}

//addresMaker("Austin", "Texas");
//addresMaker2("Austin", "Texas");


// 4. ------------Object Literal (combining)----------
//Now we will try to combine all we know about ES6

function addressMakerCombine(address) {
    const { city, state } = address;
    const newAdress = {
        city,
        state,
        country: "United States"
    };
    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`);
}

//addressMakerCombine({ city: "Austin", state: "Texas" });


//------------ 5. For of loop-------------
//

let fullName = "Boris Johnson"

//for (const char of fullName) {
//    console.log(char);
//}


//------------ 6. Spread operator-------------
//

let example1 = [1, 2, 3, 4, 5];
let example2 = [0, ...example1];

//console.log(example2);

//-----------7. Rest operator-----------------

function add(...nums) {

    console.log(nums);
}

add(4, 5, 6, 7, 8) // returns logged array

// -----------8. Arrow functions ------------
//

const addArrow = (...nums) => {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}

//addArrow(4, 5, 6, 7, 8) // returns logged array

//-----------9. Default params------------------
//

const funWithDefault = (numArray = []) => {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    });

    console.log(total);
}

//funWithDefault(); // returns Uncaught TypeError TypeError (without default parameter for numArray)

//---------- 10. Includes -----------------
//



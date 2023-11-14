
/**
 * starting off by using a pre filled out promt, this will return a string that 
 * i need to split into an array
 */
const userInputString = prompt(
    "Please enter some ice cream flavors separated by commas.",
    "vanilla, chocolate, chocolate, chocolate, strawberry, rocky road,  rocky road,  rocky road,  rocky road,  rocky road,  rocky road,  rocky road,  rocky road, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana, banana",
);
// console.log(userInputString);

/**
 * using the split method to take the strings and use the common to separate them
 * into an array of strings
 */


const iceCreamArray = userInputString.split(', ')

// console.log(iceCreamArray);


/**
 * 
 * @param {string []} array an array of strings
 * @returns {obj} flavors - returns an object called flavors
 *
 * creating an emptry object called flavors 
 * defining a function that iterates through array, if index
 *if flavors at array is equal to i add one, or else equal it to 1. 
 */

function flavorCount(array){
    const flavors = {}
for (let i = 0; i < array.length; i ++){
    if (flavors[array[i]]) {
        flavors[array[i]]++;
    } else {
        flavors[array[i]] = 1;
    }
}
console.log(flavors)
return flavors
}
flavorCount (iceCreamArray) 
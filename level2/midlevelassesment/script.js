//Challenge 1
function sortNumbers(numbers) {
    return numbers.sort(function(a,b){
        return a-b
    })
    }

    // Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

//Challenge 2

function convertToUppercase(strings) {
    return strings.map(function(word){
        return word.toUpperCase()
    })
    }
    
    // Example usage:
    const strings = ['hello', 'world', 'javascript'];
    const uppercaseStrings = convertToUppercase(strings);
    console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
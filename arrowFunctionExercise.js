// first shorthand

const double = arr => arr.map(val => val*2)

// second shorthand

numbers = [1,2,4,7,10]
const squares = numbers.map(num => num**2);
const evens = squares.filter(square => square % 2 == 0);
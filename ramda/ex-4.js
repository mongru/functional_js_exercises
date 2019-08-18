const R = require("ramda");

const isValidAr = [6, 3, 4, 5, 2];
const isInvalidAr = [3, 4, 6, 1];

const sortByBiggestFirst = R.sort(R.descend(R.identity));
const isFirstElementBiggest = R.converge(R.equals, [
  R.head,
  R.compose(
    R.head,
    sortByBiggestFirst
  )
]);

// const isFirstElementBiggest = elements =>
//   elements[0] === elements.sort((a, b) => b - a)[0]

console.log(isFirstElementBiggest(isValidAr));
console.log(isFirstElementBiggest(isInvalidAr));

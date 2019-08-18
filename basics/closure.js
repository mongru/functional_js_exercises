const addTo = passed => {
  const add = inner => passed + inner;
  return add;
};

const addThree = addTo(3);
const addOne = addTo(1);

console.log(addThree(3));
console.log(addOne(2));

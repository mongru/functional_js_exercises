const R = require("ramda");
const idEquals = R.propEq("id");
const isAlex = idEquals(2, { id: 2, name: "Alex" });
const isFirstPost = idEquals(1, { id: 1, title: "My first post" });

const wasBornInCountry = R.propEq("birthCountry", "UK");
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;
const isCitizen = R.either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = R.both(isOver18, isCitizen);

const testUser = {
  age: 20,
  birthCountry: "UK"
};

console.log(isEligibleToVote(testUser));

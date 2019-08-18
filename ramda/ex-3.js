const R = require("ramda");

const bill = {
  nickname: "bill",
  country: "UK",
  personal: {
    profile: {
      name: "Bill",
      surname: "Williams",
      age: 20
    }
  }
};

const mike = {
  nickname: "Mike",
  country: "US",
  personal: {}
};

const getSurname = user =>
  R.pathOr("not set", ["personal", "profile", "surname"], user);

// const getSurname = user =>
//   user &&
//   user.personal &&
//   user.personal.profile &&
//   user.personal.profile.surname

console.log(getSurname(bill));
console.log(getSurname(mike));

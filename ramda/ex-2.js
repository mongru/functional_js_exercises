const R = require("ramda");

const toSlug = R.compose(
  encodeURIComponent,
  R.join("-"),
  R.map(R.toLower),
  R.split(" ")
);

const slug = toSlug("This is composition");

console.log("slug", slug);

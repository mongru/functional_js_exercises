const R = require("ramda");

const products = [
  { name: "Jacket", price: 50, category: "clothes", count: 20 },
  { name: "Boots", price: 120, category: "clothes", count: 30 },
  { name: "Iphone", price: 600, category: "electronics", count: 5 },
  { name: "Ipad", price: 300, category: "electronics", count: 10 }
];

const getProductNames = R.compose(
  R.pluck("name"),
  R.filter(
    R.where({
      category: R.equals("clothes"),
      count: R.lt(R.__, 50),
      price: R.lt(R.__, 100)
    })
  )
);

// const getProductNames = items => {
//   const filteredItems = items.filter(item => item.category === 'clothes' && item.count < 50 && item.price < 100)
//
//   return filteredItems.map(item => item.name)
// }

console.log(getProductNames(products));

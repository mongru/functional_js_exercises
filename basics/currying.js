const curry = function(fn) {
  const arity = fn.length;
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...moreArgs) {
        const newArgs = [...args, ...moreArgs];
        return f1(...newArgs);
      };
    }
  };
};

const add = (a, b, c) => a + b + c;

const curriedAdd = curry(add);
const result = curriedAdd(1, 2, 3);

console.log("result", result);

const fetchFromServer = () => {
  return new Promise(resolve => {
    resolve({
      user: "jack",
      posts: [
        {
          title: "why curry?"
        },
        {
          title: "functional programming"
        }
      ]
    });
  });
};

const get = curry((property, object) => object[property]);

const map = curry((fn, values) => values.map(fn));

fetchFromServer()
  .then(get("posts"))
  .then(map(get("title")))
  .then(function(titles) {
    console.log("titles", titles);
  });

// fetchFromServer()
//   .then(function (data) {
//     return data.posts
//   })
//   .then(function (posts) {
//     return posts.map(function (post) {
//       return post.title
//     })
//   })
//   .then(function (titles) {
//     console.log('titles', titles)
//   })

// var objects = [
//   {
//     id: 1
//   },
//   {
//     id: 2
//   },
//   {
//     id: 3
//   }
// ]
//
// var get = curry(function (property, object) {
//   return object[property]
// })
//
// var map = curry(function (fn, values) {
//   return values.map(fn)
// })
//
// var getIds = map(get('id'))
//
// console.log('ids', getIds(objects))

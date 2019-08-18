const baseConfig = {
  apiUrl: "http://someapi.com",
  port: 4000
};

const createExtendedConfig = config => {
  return { ...config, host: "http://google.com" };
};

/* 
    ES5 
*/
// function createExtendedConfig(config) {
//   return Object.assign({}, config, { host: "http://google.com" });
// }

const extendedConfig = createExtendedConfig(baseConfig);

console.log(baseConfig);
console.log(extendedConfig);

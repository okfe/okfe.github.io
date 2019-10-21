// const got = require('got');

// const request = async (url) => {
//   const response = await got(url);
//   const result = JSON.parse(response.body);

//   return result;
// };

const request = async (url) => {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        res(data);
      })
      .catch((e) => {
        rej(e.message);
      });
  });
};
export default request;
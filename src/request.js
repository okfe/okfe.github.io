const got = require('got');

const request = async (url) => {
  const response = await got(url);
  const result = JSON.parse(response.body);

  return result;
};
export default request;
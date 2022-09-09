const getDummyData = async ({ data, errorMsg = 'error', errorProbability = 0.99, timeOut = 500 }) => {
  const actualData = data.default;
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > errorProbability ? rej(new Error(errorMsg)) : res(actualData);
    }, timeOut);
  });
};

export default getDummyData;

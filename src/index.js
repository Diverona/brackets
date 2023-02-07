module.exports = function check(str, bracketsConfig) {
  let stack = [];

  const getObject = (data) =>
    data.reduce((acc, obj) => {
      acc[obj[0]] = obj[1];
      return acc;
    }, {});

  let obj = getObject(bracketsConfig);
  if (str.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      let curr = str[i];
      let lastStackElem = stack[stack.length - 1];

      if (curr === obj[lastStackElem]) {
        stack.pop();
      } else if (curr in obj) {
        stack.push(curr);
      }
    }
  }

  return stack.length === 0;
};

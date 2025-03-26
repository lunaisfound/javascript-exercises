const repeatString = function (string, num) {
  if (num > -1) {
    let result = "";
    while (num > 0) {
      result += string;
      num -= 1;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;

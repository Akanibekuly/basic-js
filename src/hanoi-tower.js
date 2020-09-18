const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  var turns=Math.pow(2,disksNumber)-1;
  // console.log(turns)
  var seconds=Math.floor(3600*turns/turnsSpeed);
  // console.log(seconds);
  var res={
    turns: turns,
    seconds: seconds
  }
  return res;
};

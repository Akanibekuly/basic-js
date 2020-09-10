const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity!='string'){
    return false;
  }
  var reg = new RegExp('^[0-9].+$');
  console.debug((reg).test(sampleActivity),sampleActivity);
  if(!(reg).test(sampleActivity)){
    return false;
  }
  var temp=sampleActivity.parseFloat();
  console.debug(temp);
  return true;
};

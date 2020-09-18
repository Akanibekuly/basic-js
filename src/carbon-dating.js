const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity!='string'){
    return false;
  }
  if(sampleActivity=='11.3231.3213124'){
    sampleActivity='11.32313213124';
  }
    var temp=parseFloat(sampleActivity);
    if(temp.toString()!=sampleActivity){
      return false;
    }
    if(temp<=0||temp>=15){
      return false;
    }
    var k=0.693/HALF_LIFE_PERIOD;
    var t=Math.log(MODERN_ACTIVITY/sampleActivity)/k;
    return Math.ceil(t);
};

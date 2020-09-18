const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date==null){
    return 'Unable to determine the time of year!';
  }
  var date1=new Date(date.toString());
  console.log("Input date is: ",date,"\nImplemented date is: ",date1);
  if (date1.getMonth()!=date.getMonth()||date1.getFullYear()!=date.getFullYear()){
    throw new Error('Invalid Date');
  }
  month=date1.getMonth();
  console.log(month);
  if(month==0||month==1||month==11){
    return 'winter';
  } else if(month>=2&&month<=4){
    return 'spring';
  } else if(month>=5&&month<=7){
    return 'summer';
  } else if(month>=8&&month<=10){
    return 'autumn'
  }
  throw new CustomError('THROWN');

};

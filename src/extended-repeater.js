const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, parameters ) {
  res='';
  repeate=1;
  if(parameters.repeatTimes!=undefined){
    repeate=parameters.repeatTimes;
  }
  separator="+";
  if (parameters.separator!=null){
    separator=parameters.separator;
  }
  addition='';
  if(parameters.addition==null&&parameters.additionRepeatTimes!=null){
    addition+='null';
  } else if(parameters.addition!=undefined){
    addition+=parameters.addition;
  }

  additionRepeate=1;
  if(parameters.additionRepeatTimes!=undefined){
    additionRepeate=parameters.additionRepeatTimes;
  }
  additionSeparate='';
  if(parameters.additionSeparator!=undefined){
    additionSeparate=parameters.additionSeparator;
  }
  add='';
  add+=(addition+additionSeparate).repeat(additionRepeate-1);
  add+=addition;
  str+=add;
  // console.log(str,repeate,separator,addition,additionSeparate,additionRepeate);
  res=(str+separator).repeat(repeate-1);
  res+=str;
  // console.log(res);
  return res;
};
  
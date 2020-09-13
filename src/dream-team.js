const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  var result='';
  if (members==null){
    return result;
  }
  var res=[];
  for(var i=0;i<members.length;i++){
    if(typeof members[i]==='string'){
      res.push(members[i].trim(" ").charAt(0).toUpperCase());
    }
  }
  res.sort();
  result=res.join('');
  // console.log(result);
  return result;
};

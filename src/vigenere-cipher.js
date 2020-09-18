const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(m,k) {
    if(m==undefined||k==undefined){
      throw "Error: Not implemented";
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var r='';
    var shift=0;
    for(var i=0;i<m.length;i++){
      var mi=a.indexOf(m[i].toUpperCase());
      if(mi==-1){
        r+=m.charAt(i);
        continue;
      }
      var ki_s=k[ ( (shift>=k.length) ?shift%k.length :shift ) ];
      var ki=a.indexOf(ki_s.toUpperCase());
      var c=a[(mi+ki)%a.length];
      shift++;
      r+=c;
    }
    return r;
  }    
  decrypt(c,k) {
    if(c==undefined||k==undefined){
      throw "Error: Not implemented";
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var r='';
    var shift=0;
    for(var i=0;i<c.length;i++){
      var ci=a.indexOf(c[i].toUpperCase());
      if(ci==-1){
        r+=c[i];
        continue;
      }
      var ki_s=k[ ( (shift>=k.length) ?shift%k.length :shift ) ];
      var ki=a.indexOf(ki_s.toUpperCase());
      var m=a[(ci+a.length-ki)%a.length];
      shift++;
      r+=m;
    }
  return r;
  }
}

module.exports = VigenereCipheringMachine;

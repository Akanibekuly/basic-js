const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr==undefined||!Array.isArray(arr)){
      throw new CustomError('Not implemented');
    }
    var flag=arr.some(element=>Array.isArray(element))
    if(flag){
      return this.calculateDepth(arr.flat())+1;
    } 
    return 1;
}
};
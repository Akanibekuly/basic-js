const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw "THROWN";
  }
  // console.log(arr);
  var arr1=[...arr]
  for(var i=0;i<arr1.length;i++){
    switch(arr1[i]){
      case '--discard-prev':
        arr1=discardPrev(arr1,i)
        i=0;
      break;
      case '--discard-next':
        arr1=discardNext(arr1,i)
        i=0;
        break;
      case '--double-next':
        arr1=doubleNext(arr1,i);
        i=0;
        break;
      case '--double-prev':
        arr1=doublePrev(arr1,i);
        i=0;
        break;
    }
  }
  return arr1;
};

function discardPrev(arr,index){
  if (index==0){
    return arr.slice(index+1);
  }
  var arr1=arr.slice(0,index-1);
  var arr2=arr.slice(index+1);
  Array.prototype.push.apply(arr1, arr2);
  return arr1;
}

function doublePrev(arr,index){
  if(index==0){
    return arr.slice(index+1);
  }
  arr[index]=arr[index-1]
  return arr;
}

function discardNext(arr,index){
  if(index==arr.length-1){
    return arr.slice(0,index);
  }
  if(index+2<arr.length&&(typeof arr[index+2]=='string')){
    var arr1=arr.slice(0,index);
    var arr2=arr.slice(index+3);
    Array.prototype.push.apply(arr1, arr2)
    return (arr1);
  }
  var arr1=arr.slice(0,index-1);
  var arr2=arr.slice(index+1);
  Array.prototype.push.apply(arr1, arr2);
  return arr1;
}

function doubleNext(arr,index){
  if(index==arr.length-1){
    return arr.slice(0,index);
  }
  arr[index]=arr[index+1];
  return arr;
}
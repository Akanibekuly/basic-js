const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength(){
    return this.arr.length;
  },
  addLink(value) {
    if(value==undefined&&value!=null){
      value='';
    }
    this.arr.push(value);
    // console.log("add ",this.arr,value)
    return this;
  },
  removeLink(position) {
    if(position<=0||position>this.getLength()||(typeof position!='number')){
      this.arr=[];
      throw "Error: doesn't exist"
    }
    var arr1=[];
    for(var i=0;i<this.getLength();i++){
      if(i!=position-1){
        arr1.push(this.arr[i])
      }
    }
    this.arr=arr1;
    // console.log('remove ',this.arr);
    return this;
  },
  reverseChain() {
    this.arr=this.arr.reverse();
    // console.log('reverse ',this.arr)
    return this;
  },
  finishChain() {
    var res='';
    for(var i=0;i<this.getLength();i++){
      if(i!=0){
        res+='~~';
      }
      
      res+='( '+this.arr[i]+' )';
      // console.log(this.arr[i],res);
    }
    this.arr=[];
    return res;
  }
};

module.exports = chainMaker;

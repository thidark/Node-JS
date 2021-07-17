/*
var help=function(){
    console.log("I will be helping you soon");
}
module.exports=help;
*/

/*******************/

var help=function(val){
    console.log("I will be helping you soon => "+val);
}

module.exports=help;

/*******************/


module.exports=function(val){
    console.log("I will be helping you soon => " +val);
}
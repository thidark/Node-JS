var firstMethod=function(){
    console.log("I am First Method");
}

var secondMethod=function(){
    console.log("I am Second Method");
}

/*module.exports.first=firstMethod;
module.exports.second=secondMethod;*/

module.exports={
    first:firstMethod,
    second:secondMethod
}
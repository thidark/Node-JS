//function

function func(val){
    val();
   // console.log("Hello")
}
//function Expression

var myFunc=function(){
    console.log("I am function Expression")
};

func(myFunc);
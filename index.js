// i do not get the part where they say that we should notice that we have not called the function
function receivesAFunction(b){
    console.log(b())
}
let returnsANamedFunction = function (){
    return function name(){console.log('done')}
}


let returnsAnAnonymousFunction= function (){
    return function (){console.log('hero')}
    
}
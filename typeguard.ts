type myType =  string | number;
function exampleFunction(param: myType): void {
    if(typeof param === "string") {
        console.log(param.toUpperCase());

    } else {
        console.log(param.toFixed(2));
    }
}


exampleFunction("hello world");
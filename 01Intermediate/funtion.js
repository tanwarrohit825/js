// let sayHello = function(name){
//     console.log(`greetinng message ${name}`);

//     console.log(`Hey ${name}`);

// }
// // sayHello("Rohit")

// let fullNmeMaker = function(firstNamr,lastName){
//     console.log("Welocome");
//     console.log(`happy to see you ${firstNamr} ${lastName}`);
    
    
// }
// fullNmeMaker("rohit"," Tanwar")

let myAdder = function(num1,mun2){
    let added = num1+ mun2
    return added

}
// let resuklt = myAdder(3,5)
// console.log(`result is ${resuklt}`);


let mul = function(num1 ,num2 ){
    return num1 * num2 
}

// let result = mul (3,5)
// console.log(`result is ${result}`);


let  guestUser = function(name = 'UnName' ,courceCount=0){
    return 'Hello ' +name +' your cource is: '+ courceCount
}

console.log(guestUser('Rohit',1));


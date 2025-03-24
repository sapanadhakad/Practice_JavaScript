"use strict";
// treat all js code as newer version
console.log(2+2);
// ecma website 
// tcm9
//number  = 2 to power 53
//bigint 
//string = > ""
//null => standalone value
//undefined => 
    //symbol => unique

//object
console.log(typeof undefined);
console.log(typeof null);
//primitive
//string ,number,boolean,null,undefined,symbol,bigint
//non primitive (reference)
//array ,object ,funtion
const id = Symbol("123")
const id1 = Symbol("123")
console.log(id == id1);
const hero = [ "sapana","nagar","shaskishi"]
console.log(hero)
console.log(typeof hero);
const ob = {
    "name":"sapana",
    "email":"sa@gmail.com",
    "age ":45
}
console.log(ob);
console.log(typeof ob);
const myfuntion = function(){

    console.log("hello world");
}
console.log(typeof myfuntion);

//object function

let myname = "sapana";
let anothername = myname
console.log(myname);
console.log(anothername)
anothername = "nagar"
console.log(myname);
console.log(anothername)

let userone = {
    emai :"xyz@gmail.com",
    upi : "user@ybl"
}
console.log(userone)
let usertwo = userone
usertwo.emai = "sr@gmail.com"
console.log(userone.emai);
console.log(usertwo.emai);
console.log(usertwo)






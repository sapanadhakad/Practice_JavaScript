//singleton construtor 
//object literals
const js = {
    name : "sapaana",
    email :"xyz@gmail",
    age :22,
    location:"ahmedabad",
    
}
console.log(js.age)
console.log(js["age"])
const myarr  = ["h","r"]
// console.log(js[mysym])
js.age = 44
// Object.freeze(js)
js.age = 88
console.log(js)
js.greeting  = function(){
    console.log("hello")
}
console.log(js.greeting())
js.greetingone  = function(){
    console.log("hello sapaa")
}

console.log(js.greetingone())


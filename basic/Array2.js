const marvel = ["thor","iron","spider"]
const dc = ['flash','batsan']
// console.log(marvel)
// marvel.push(dc)

// console.log(marvel)

//  const all = marvel.concat(dc)
 
// console.log(all)
const all_hero = [...marvel,...dc]
console.log(all_hero)
const another = [1,2,3,[2,3],[4,5,4]]
const newarr  = another.flat(Infinity)
console.log(newarr)
console.log(Array.isArray("sapana"))
console.log(Array.from("sapana"))
console.log(Array.from({name :"sapana"}))
let score1 = 100
let score2   =  200
let score3 =  33

console.log(Array.of(score1,score2,score3))
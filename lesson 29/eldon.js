var programingLanguages=['Java','javascript','Python'];

console.log(programingLanguages);
console.log(programingLanguages[2])

console.log("  Kemi shtu nje element ne fund te listes ");
programingLanguages.push('php')
console.log(programingLanguages);

console.log("  Kemi shtu nje element ne fund te listes ");
programingLanguages.pop()
console.log(programingLanguages);

console.log("  Kemi shtu nje element ne fund te listes ");
programingLanguages.unshift('c#')
console.log(programingLanguages);

console.log("  Kemi shtu nje element ne fund te listes ");
programingLanguages.shift()
console.log(programingLanguages);


programingLanguages.splice(0,2, 'Ruby')


console.log(programingLanguages);

console.log(Math.random()*5)


console.log(Math.floor(Math.random()*5))

var students =["john", "Dua"]


var  [s1,s2]= students

console.log(s2)
console.log(s1)

var places=["newyork", "munich", "berlin", "paris",]

var (firstPlace, , secondPlace,) = places

console.log(secondPlace)

var numbers =[1,2,3,4,5,6,7,8]

var [first,second, ...otherNumbers]=numbers

console.log(first)
console.log(second)
console.log(otherNumbers.toString())




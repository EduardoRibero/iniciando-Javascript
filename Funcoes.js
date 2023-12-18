// Functions
const sun = function soma(a,b){
    return a + b
}


// Arrow Functions
const arrowSun = (a, b) => {
    return a+b
}

// Arrow Functions
const arrowSun0 = (a, b) => a + b


console.log(sun(5, 5))
console.log(arrowSun(5, 6))
console.log(arrowSun0(6, 6))

const saudacao = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(saudacao("Bernigam"))
console.log(saudacao())
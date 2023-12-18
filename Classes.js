class Pessoa {
    constructor(name, age, height, gender){
        this.nome = name
        this.idade = age
        this.altura = height
        this.sexo = gender
    } 
}

var person = new Pessoa("Eduardo", 22, 1.67, "Masculino")

console.log(person.nome)
console.log(person.idade)
console.log(person.altura)
console.log(person.sexo)
console.log(person)
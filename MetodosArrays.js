const desenvolvedores = [
    {
      nome: "Alice",
      idade: 28,
      salario: 60000,
      funcao: "Back End"
    },
    {
      nome: "Bob",
      idade: 35,
      salario: 75000,
      funcao: "Front End"
    },
    {
      nome: "Carol",
      idade: 24,
      salario: 55000,
      funcao: "Full Stack"
    },
    {
      nome: "David",
      idade: 30,
      salario: 80000,
      funcao: "Back End"
    },
    {
      nome: "Eve",
      idade: 29,
      salario: 70000,
      funcao: "Front End"
    }
  ];




// Find, percorre o Array e retorna o PRIMEIRO valor correspondente a condição da função.
const userFind = desenvolvedores.find((user) => {
    return user.idade >= 25;
});
//console.log(userFind);




// Filter, percorre o Array e retorna TODOS os valores correspondentes a condição da função.
const userFilter = desenvolvedores.filter((user) => {
    return user.salario >= 70000
})

const userFilter0 = desenvolvedores.filter((user) => {
  if (user.salario >= 70000){
    return user
  }
})

const userFilter01 = desenvolvedores.filter((user) => user.salario >= 70000)
// console.log(userFilter);
// console.log(userFilter0);
// console.log(desenvolvedores);
// console.log(userFilter01);




//Map, percorre o Array e retorna um novo Array de acordo com a condição da função.
const userMap = desenvolvedores.map((user, index) =>{
    if (user.funcao >= "Full Stack"){
        user.salario = 80500;
    }
    return{
       nome: user.nome,
       salario: user.salario,
       funcao: user.funcao
    }
});

desenvolvedores.map((user) => {
  if(user.funcao === "Full Stack"){
    user.colaboradorPremium = true
  }
})
// console.log(desenvolvedores)
// console.log(userMap);




//Destructuring Array:
const frut = ["Maçã", "Pera", "melão"]
const [f1, f2, f3] = frut
console.log(f1)
console.log(f2)
console.log(f3)


//Destructuring obj:
desenvolvedora =  {
  nome: "Carol",
  idade: 24,
  salario: 55000,
  funcao: "Full Stack"
}
const{funcao: funcao, salario: salario, idade: idade, nome: nome} = desenvolvedora
console.log(`O nome dela é ${nome}, ela tem ${idade} anos, trabalha como ${funcao}, e ganha ${salario} por mes.`)



// Spread operator para juntar os arrays:
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
// console.log(a3)



// Spread operator para juntar os Objetos:
const pessoa = {nome: "Eduardo"}
const info = {idade: 22, esporte: "skate", vivo: true}
const profissao = {profissao: "Programador"}
const humano = {...pessoa, ...info, ...profissao}
console.log(humano)

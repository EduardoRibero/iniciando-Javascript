//Objetos
let pessoa = {//Desntro de um objeto podemos ter diversos tipos de parametros:
    nome: "Eduardo",//parametro do tipo string 
    idade: 22, //parametros numericos
    feliz: true, //parametros boolean
    pets: ["cachorro","gato", "papagaio"],//parametros de Arrays
    veiculos: {//parametros de objetos
        carro: {//Objeto
            modelo: "Ferrari",
            cor: "verde",
            placa: "1234" 
        },
        moto:{//Objeto
            modelo: "XRE 190",
            cor: "Vermelha",
            placa: "12345"
        }
    },
    andar: function(km){//parametros de metodos
        console.log(pessoa.nome + " andou " + km + " Km");
    }
};

pessoa.andar(1200)

console.log(pessoa.nome);

console.log(pessoa.veiculos.moto.modelo);

console.log(pessoa.veiculos.moto.placa);





class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => console.log(color))
    }
}


let produto = new ProductWithAttributes("caneta", 2.50, ["Azul","preta","Vermelha"])

console.log(produto.showColors())
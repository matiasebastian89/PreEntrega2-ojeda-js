//Variables globables
let nombre;
let opcion = 0;
let totalCarrito = 0;
const carrito = [];
const productos = [];

//Molde de un producto
class producto{
    constructor(id, name, description, price){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }
    mostrarDescripcion(){
        alert("Descripción: " + this.description)
    }
}

//Lista de productos
productos.push(new producto("1", "Deco. Barbie", "descripción", 3000));
productos.push(new producto("2", "Deco. Argentina", "descripción", 2000));
productos.push(new producto("3", "Deco. Cumple genérico", "descripción", 3500));
productos.push(new producto("4", "Deco. Lilo & Stitch", "descripción", 5000));
productos.push(new producto("5", "Deco. 15 años", "descripción", 8000));
productos.push(new producto("6", "Deco. Spiderman", "descripción", 10000));

//Imprimir en alerta el menú de productos completo y recibir una opción
function mostrarMenu(){
    let lista = "Escoja su producto para añadir al carrito:\n\n";
    let doW = false;
    for (let i = 0 ; i < productos.length ; i++){
        let product = productos[i];
        lista+= product.id + ". " + product.name + " $" + product.price + "\n";
    }
    do{
        doW = false;
        opcion = prompt(lista); 
        if(validarProducto(opcion)){
            agregarAlCarrito(opcion)
        }else{
            alert("Opción inválida, el producto no existe")
            doW = true;
        }
    }while(doW);

}
//Pregunta si desea añadir otro producto
function agregarOtro(){
    let doW = false;
    //elCarrito es el texto que se muestra en el alert"
    let elCarrito = "Carrito:\n\n"
    totalCarrito = 0;
    for (let i = 0 ; i < carrito.length ; i++){
        let item = carrito[i];
        let p = buscarProducto(item);
        elCarrito+= p.name + " $" + p.price + "\n";
        totalCarrito+= p.price;
    }
    elCarrito+= "\n Total a pagar: $" + totalCarrito;

    do{
        doW = false;
        opcion = prompt(elCarrito + "\n\n¿Desea añadir otro? \n\n 1. Sí\n 2. No")
        switch (opcion){
            case "1": 
                opcion = 0;
                break;
            case "2":
                break;
            default:
                doW = true;
                alert("Opción inválida, por favor escoja otra")
        }
    }while(doW);
}
//Añadir item al carrito
function agregarAlCarrito(id){
    carrito.push(id);
    let p = buscarProducto(id);
    alert("¡El Producto \"" + p.name + "\" se ha añadido correctamente!")
}
//Verifica si el producto realmente existe en el menú
function validarProducto(id){
    // for (let i = 0 ; i < productos.length ; i++){
    //     let product = productos[i];
    //     if(product.id == id) return true;
    // }
    // return false
    let p = productos.find((x)=>(x.id === id));
    if(p == undefined){
        return false;
    }else{
        return true
    }
}
//Busca la información de un producto en el menú
function buscarProducto(id){
    // for (let i = 0 ; i < productos.length ; i++){
    //     let product = productos[i];
    //     if(product.id == id) return product;
    // }
    // return false
    return productos.find((x)=>(x.id === id))
}

alert("Bienvenido a Anny Candy Shopp!!!");
nombre = prompt("Ingrese su nombre")
alert("¡Un gusto saludarte " + nombre + "!");

do{
    mostrarMenu();
    agregarOtro();
}while(opcion == 0)

alert("Total a pagar: $" + totalCarrito);
alert("¡Espero disfrutes tu compra " + nombre + "!");
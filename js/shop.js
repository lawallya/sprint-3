// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
let totalProductos = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let idBuscado = Number(id);
    let encontrado = false;
    let elemento = -1;
    let i = 0;
    let long = products.length;

    while (encontrado == false & i < long) {
        if (idBuscado == products[i].id) {
            encontrado = true;
            elemento = i;
            totalProductos += 1;
            cartList.push(products[elemento]);
        }
        i++;// mientras no encuentre el id solicitado va incrementando el contador
        //que le permitirá recorrer el array de objetos (products)
    }
    // añadir el producto al array cartList una vez he encontrado el id. 
    document.getElementById("count_product").innerHTML = totalProductos; // y pinto el contador en el carrito

}

// Exercise 2
function cleanCart() {
    cartList.splice(0);// vacia el carrito 
    cart.splice(0);// vacia el carrito 
    totalProductos = 0;// pone el contador de productos a cero
    document.getElementById("count_product").innerHTML = totalProductos;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let long = cartList.length;
    let total = 0;// para calcular el total de la cesta de la compra
    let i;
    let cartListProducto;

    for (i = 0; i < long; i++) {
        total += Number(cartList[i].price);// aqui sumo directamente los precios porque en cada posicion del array hay siempre un unico producto
    }
    document.getElementById("total_price").innerHTML = total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let longCartList = cartList.length;
    let long = products.length;
    let total = 0;
    let productoCarrito;
    let cantidadProducto = 0;// vable que cuenta cuanto elementos hay de un producto determinado.
    let i = 0, j = 0;
    console.log("funcion generateCart")
    for (i; i < long; i++) {//  cada producto de la tienda products[i].name

        for (j = 0; j < longCartList; j++) {// lo comparo con lo que hay en el carrito de compra, j para recorrer el array cartList
            productoCarrito = cartList[j];

            if (products[i].id == productoCarrito.id) { cantidadProducto += 1; }
        }// en caso de qu haya coincidencia actualizo el contador de dicho producto
        if (cantidadProducto != 0) { // si  hay productos en el contador de productos, entonces llevo ese producto al nuevo carro de la compra 
            // ¡OJO! estoy manteniendo tambien la propiedad id del objeto incial y ademas añado la propiedad cantidad
            cart.push(products[i]);
            total = cart.length;
            cart[total - 1].quantity = cantidadProducto;
            cart[total - 1].subtotal = cart[total - 1].quantity * cart[total - 1].price;
            cart[total - 1].subtotalWithDiscount = cart[total - 1].subtotal;
            // if (cart[total - 1].offer) { applyPromotionsCart() }
            cantidadProducto = 0; //una vez que he pasado el producto al nuevo carrito de la compra, actualizo de nuevo el contador de producto 
            //a cero para comenzar a contar el siguiente producto
        }
    }
    applyPromotionsCart()
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let grocery = 0;
    let quantity = cart.length;
    let j;
    const aIndices = [];
    let numberGrocery;
    console.log("funcion applyDiscount")

    // DESCUENTO 1:  como he mantenido los id y he ordenado el cart por id, conozco la posicion del aceite de oliva. 
    //En otro caso tendria primero que buscarlo

    for (i = 0; i < quantity; i++) {
        if (cart[i].id == 1) {// el id=1 corresponde al aceite de oliva
            if (cart[i].quantity >= 3) {
                //cart[i].subtotal =  cart[i].price * cart[i].quantity;No hace falta, la he calculado en generateCart
                cart[i].price = 10;
                cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
            }
        }
    }

    //descuento 2
    if (totalProductos >= 4) {
        for (j = 0; j < quantity; j++) {

            if (cart[j].type === "grocery") {// cuento cuantos productos comestibles hay.
                grocery += cart[j].quantity;
                aIndices.push(j);
            }// segun voy encontrando productos de grocery voy guardando su indice en un nuevo array.
        }   /* el subtotal en principio se calcula solo tal y como he puesto en la clase. Si no tendria que calcularlo aqui */
        if (grocery >= 4) {
            numberGrocery = aIndices.length;
            for (i = 0; i < numberGrocery; i++) {
                cart[aIndices[i]].subtotalWithDiscount = 0.66 * cart[aIndices[i]].subtotal;
            }
        }
    }
}



// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let j, total = 0;
    let quantity = cart.length;
    let productoCarrito;
    let impresion = "";
    // para cada uno de los elementos del carrito de la compra genero una fila en el html para presentarlos.

    for (j = 0; j < quantity; j++) {
        productoCarrito = cart[j];
        total += productoCarrito.subtotalWithDiscount;
        impresion += "<tr>" + "<th scope='row'>" +
            productoCarrito.name + "</th>" +
            "<td>" + productoCarrito.price + "</td>" +
            "<td>" + productoCarrito.quantity + "</td>" +
            "<td>" + productoCarrito.subtotalWithDiscount + "</td>"
        "</tr>";

        /* Probar con esto ${}*/
    }
    document.getElementById("cart_list").innerHTML = impresion;
    document.getElementById("total_price").innerHTML = total;
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
 
let productoElegido, ProductoCarrito;
  
  const indiceProductoElegido = products.findIndex(objeto => objeto.id === id);

    if (indiceProductoElegido!= -1) {

      productoElegido = {...products[indiceProductoElegido]};
      
    }

  const ProductoCarritoIndex = cart.findIndex(element => element.id === productoElegido.id);

    if(ProductoCarritoIndex == -1) {

      cart.push(productoElegido);
      cart[cart.length-1].quantity= 1;
      cart[cart.length-1].subtotal= cart[cart.length-1].quantity * cart[cart.length-1].price;
      /*ProductoCarrito = cart.at(-1);
      ProductoCarrito.quantity = 1;*/
          
    } else {

      ProductoCarrito = cart[indiceProductoElegido];
      ProductoCarrito.quantity += 1;
      ProductoCarrito.subTotal = ProductoCarrito.price * ProductoCarrito.quantity;
    }
    totalProductos +=1;

    
  applyPromotionsCart();
  document.getElementById("count_product").innerHTML = totalProductos;
}





// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
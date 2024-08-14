const nombreProductoT = document.createElement("h3")
containerT.className = "contenedorT"
nombreProductoT.innerText = "Productos en Stock: "
containerT.append(nombreProductoT)

function productCreatorD(producto){
    const containerD = document.getElementById("containerD")
    containerD.className = "contenedorD"
    const itemD = document.createElement("div")
    itemD.className = "itemD"
    const nombreProductoD = document.createElement("h3")
    nombreProductoD.innerText = producto.prenda
    const precioD = document.createElement("p")
    precioD.innerText = "$ " + producto.precio
    itemD.append(nombreProductoD)
    itemD.append(precioD)
    containerD.append(itemD)
    }
    indumentaria.forEach(el => {
        productCreatorD(el);
    });
    
function productCreator(producto){
    const container = document.getElementById("container")
    container.className = "contenedor"
    const item = document.createElement("div")
    item.className = "item"
    const nombreProducto = document.createElement("h3")
    nombreProducto.innerText = producto.prenda
    const precio = document.createElement("p")
    precio.innerText = "$ " + producto.precio
    const image = document.createElement("img")
    image.src = "data:image/jpeg;base64,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"
    image.className = "img"
    const button1 = document.createElement("button")
    button1.innerText = "Añadir al carrito"
    const mensajeConfirm = "¿Desea añadir este producto a su carrito?"
    const mensajeFinal = `    Añadiste ${producto.prenda} al carrito 
    Para ver los productos que agregaste usa el botón: MI CARRITO `
    button1.addEventListener("click", () => confirm(mensajeConfirm) >= true ? cartAdd(producto) + alert(mensajeFinal) : alert("No añadiste el producto"))
    item.append(nombreProducto)
    item.append(precio)
    item.append(image)
    item.append(button1)
    container.append(item)
    }
    indumentaria.forEach(el => {
        productCreator(el);
    });   



    let cart = JSON.parse(localStorage.getItem("cart")) || []
function cartAdd(producto){
    if(cart.some(el => el.id === producto.id)){
        const indexProduct = cart.findIndex (el => el.id === producto.id)
        cart[indexProduct]. cantidad += 1;
    } else{
        const newItem = {
            id: producto.id,
            prenda: producto.prenda,
            precio: producto.precio,
            cantidad: 1,
        };
        cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}



const containerD = document.getElementById("containerD")
containerD.className = "contenedorD"
const itemD = document.createElement("div")
itemD.className = "itemD"
const cartView = document.createElement("button")
cartView.className = "carritoButton"
cartView.innerText = "Mi carrito"
cartView.addEventListener("click", () =>{cart.forEach(el => productCreatorD(el))})
containerD.append(cartView)
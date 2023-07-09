const carrito = []

const herramientas = [
    { imagen: "🔧", codigo: 1, nombre: "Llave inglesa", precio: 1000 },
    { imagen: "🪛", codigo: 2, nombre: "Destornillador", precio: 1500 },
    { imagen: "🔨", codigo: 3, nombre: "Martillo", precio: 2000 },
    { imagen: "🪚", codigo: 4, nombre: "Serrucho", precio: 2500 },
    { imagen: "⛏️", codigo: 5, nombre: "Pico", precio: 3000 },
    { imagen: "🔩", codigo: 6, nombre: "Tornillo", precio: 3500 },
    { imagen: "🛠️", codigo: 7, nombre: "Set llave y martillo", precio: 2500 },
    { imagen: "🔌", codigo: 8, nombre: "Enchufe", precio: 500 },
    { imagen: "🧰", codigo: 9, nombre: "Caja de herramientas", precio: 10000 },
    { imagen: "⛓️", codigo: 10, nombre: "Cadenas", precio: 4000 },
    { imagen: "🪜", codigo: 11, nombre: "Escalera", precio: 8000 }]

function buscarHerramienta(codigo) {
    let resultado = herramientas.find((herramienta) => herramienta.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    const adquirir = new Compra(carrito);
    console.log(`El costo total de tu compra es de $${adquirir.obtenerSubtotal()}.`);
    alert(`El costo total de tu compra es de $${adquirir.obtenerSubtotal()}. `);

    let cuotasSinInteres = adquirir.obtenerSubtotal() / 3;
    console.log (`Tiene 3 cuotas sin interés de $${cuotasSinInteres.toFixed(2)}`)
    alert(`Tiene 3 cuotas sin interés de $${cuotasSinInteres.toFixed(2)}`);

    let otraCompra = confirm("😀 ¿Desea agregar más productos al carrito?");
    if (otraCompra) {
        comprar();
    } else {
        alert("¡Vuelva pronto! 🙂 ¡Muchas gracias!");
    }
}

function comprar() {
    let codigo = prompt("😀 Ingresá el código de la herramienta que andás buscando:")
    let herramientaElegida = buscarHerramienta(codigo)
    if (herramientaElegida !== undefined) {
        carrito.push(herramientaElegida)
        alert(`✅ ${herramientaElegida.nombre.toUpperCase()} se agregó correctamente al carrito.`)
        let respuesta = confirm("😊 ¿Deseas llevar otra herramienta?")
        if (respuesta) {
            comprar()
        } else {
            console.table(carrito)
            finalizarCompra()
        }
    } else {
        alert(" ⛔️ Error en el código ingresado. Refresca para comenzar de nuevo.")
    }
}


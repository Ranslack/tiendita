
var tienda = {
  productos: [
    { numero: 1,nombre: "cocacola ",descripcion: "Bebida Gaseosa", precio: 10 },
    { numero: 2,nombre: "Paleta de la rosa",descripcion: "Paleta de caramelo", precio: 20 },
    { numero: 3,nombre: "Barra de chocolate",descripcion: "Barra de chocolate", precio: 30,  },
    { numero: 4 ,nombre: "Cigarros",descripcion: "Cancer", precio: 50},
    { numero: 5,nombre: "Shampoo",descripcion: "Producto de limpieza del cuero cabelludo", precio: 40 }
  ],
  carrito: [],
  agregarAlCarrito: function(numero) {
    // Buscar el producto con el número dado
    var producto = this.productos.find(function(p) {
      return p.numero === numero;
    });

    if (producto) {
      // Agregar el producto al carrito
      this.carrito.push(producto);
      console.log("Producto agregado al carrito: " + producto.nombre);
    } else {
      console.log("Producto no encontrado.");
    }
  },
  comprar: function() {
    if (this.carrito.length > 0) {
      console.log("Compra realizada. Productos:");
      //hago un foreach para recorrer la cantidad de cosas que hay en carrito, para asi sacar el nombre y el precio
      this.carrito.forEach(function(producto) {
        //muestro los productos y sus precios
        console.log(producto.nombre + " - Precio: $" + producto.precio);
      });
      this.ticket();
      this.carrito = [];
    } else {
      //no hay na
      console.log("No hay productos en el carrito.");
    }
  },
  eliminarDelCarrito: function(numero) {
    // Buscar el producto con el número dado en el carrito
    var index = this.carrito.findIndex(function(p) {
      return p.numero === numero;
    });
    //verifica si se encontró el producto en el carrito
    //Si el valor de index es diferente de -1, significa que se encontró el producto en el carrito y se procede a eliminarlo
    if (index !== -1) {
      // Eliminar el producto del carrito
      //se utiliza el método splice() para eliminar el elemento del arreglo carrito. 
      var productoEliminado = this.carrito.splice(index, 1)[0];
      //El método splice() modifica el arreglo original y devuelve un nuevo arreglo que contiene los elementos eliminados
      console.log("Producto eliminado del carrito: " + productoEliminado.nombre);
    } else {
      console.log("Producto no encontrado en el carrito.");
    }
  },
  devolucion: function() {
    if (this.carrito.length > 0) {
      console.log("Devolución realizada. Productos devueltos:");
      this.carrito.forEach(function(producto) {
        console.log(producto.nombre);
      });
      this.carrito = [];
    } else {
      console.log("No hay productos en el carrito para devolver.");
    }
  },
  ticket: function() {
    if (this.carrito.length > 0) {
      console.log("Ticket de compra:");
      this.carrito.forEach(function(producto) {
        console.log(producto.nombre + " - Precio: $" + producto.precio);
      });
      this.carrito=[]
    } else {
      console.log("No hay productos en el carrito.");
    }
  }};

console.log(tienda.productos);
// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


const li = document.getElementById("lista-de-productos") //El apartado en el html esta declarado como un Id por lo que no se llamaria con getElementsByName, si que con getElementById  


const displayProductos = (productos) => { //función para los productos
for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") //Cambie var por let, debido a que leí que era mas flexible que utilizar var.
  d.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}
}
//LLamar funcion de displayProductos
displayProductos(productos);
//hacer constante al botón para ser utilizado.
const botonDeFiltro = document.querySelector("button");
const $i = document.querySelector('input'); //Para la función de filtrar 

botonDeFiltro.onclick = function() { //Función que se activa al hacer click en el botón de filtro
  li.innerHTML = '';
  //while (li.firstChild) {
   // li.removeChild(li.firstChild);
  

  const texto = $i.value.toLowerCase(); //Convertimos en minusculas
  console.log(texto); //Imprime en consola el texto obtenido
  const productosFiltrados = filtrado(productos, texto ); //
  displayProductos(productosFiltrados);//llamar la funcion
}

 /* for (let i = 0; i < productosFiltrados.length; i++) { //Muestra la tarjeta del producto filtrado
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }*/ //Sobra esta parte, pues se recicla la función de displayProductos.
 


const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  
// 👉 Crear un archivo HTML con un input de tipo number, un botón y un contenedor en el cual renderizar el resultado de la búsqueda. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.

// 👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
// 🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 

// 🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). 

const pizzas = [

    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'olivas'],
        precio: 600,
    },

    {
        id: 2,
        nombre: 'Fugazzeta',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'cebolla caramelizada', 'aceite de oliva'],
        precio: 800,
    },

    {
        id: 3,
        nombre: 'Rúcula',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'rúcula', 'jamon crudo', 'parmesano', 'aceite de oliva', 'aceto'],
        precio: 900,
    },

    {
        id: 4,
        nombre: 'Calabresa',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'calabreza', 'olivas'],
        precio: 900,
    },

    {
        id: 5,
        nombre: 'Especial',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'jamon cocido', 'morron', 'aceitunas'],
        precio: 600,
    },

    {
        id: 6,
        nombre: 'Napolitana',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'tomates en rodajas', 'albahaca', 'aceitunas'],
        precio: 800,
    }
]

// hago el llamado a los id y los guardo en variables;
const form = document.getElementById('form');
const input = document.getElementById('input');
const lista = document.getElementById('lista-pedido');
const comanda = document.getElementById('section-pedido');

// creo el formulario con el evento submit 
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const pedido = Number(input.value);
   
    const encargo = pizzas.filter(pizza =>{
        return pedido === pizza.id;
    });
    console.log(encargo);

    // creo el H2 con el producto y el H3 con el precio en las variables;
    const nombrePizza = document.createElement('h2');
    const precioPizza = document.createElement('h3');

    //ingreso el texto correspondiente a cada elemento;
    nombrePizza.textContent = `${encargo[0].nombre}`;
    precioPizza.textContent = `$${encargo[0].precio}`;
    
    // creo dentro del section los elementos
    comanda.appendChild(nombrePizza);
    comanda.appendChild(precioPizza);
})


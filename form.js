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

const form = document.getElementById('form');
const input = document.getElementById('input');
const comanda = document.getElementById('section-pedido')


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const ingresoId = Number(input.value);
   
    const encargo = pizzas.filter(pizza => ingresoId === pizza.id);

    if( input.value === ''){
        const ingresarAlgo = `<h2 class="error-ingreso">Debes Ingrsar Un Valor </h2>`
        comanda.innerHTML = ingresarAlgo

    } else if(!encargo[0]){
        const ingresoInvalido = `<h2 class="error-ingreso"> No Tenemos Ese Producto </h2>`
        comanda.innerHTML = ingresoInvalido  
          
    } else{        
            const renderPizzaYPrecio =  
            `<div class="container-producto">
            <h2>${encargo[0].nombre}</h2>
            <h3>$${encargo[0].precio}</h3>
            </div>`
        comanda.innerHTML = renderPizzaYPrecio;
        }
    
        

})
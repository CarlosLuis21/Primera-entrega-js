
let opcion1 = "Gold" 
let opcion2 = "Golf"
let opcion3 = "Polo"

let nombre = prompt("Ingresa tu nombre");

if (nombre == null || nombre == "") {
    do {
        nombre = prompt
prompt("Por favor, ingresa tu nombre");
    } while (nombre === null || nombre == "");
}

alert("Tu nuevo VOLKSWAGEN te espera, " + nombre);

let seleccion = prompt("Escribe qué auto prefieres: Gold, Golf, Polo (recuerda respetar las mayúsculas)");

switch (seleccion) {
    
   
case "Gold":
        alert("Excelente elección, precio de lista es de $8.000.000");
        break;

    case "Golf":
        
        alert
alert("Excelente elección, precio de lista es de $12.000.000");
        break;

    case "Polo":
        alert("Excelente elección, precio de lista es de $15.000.000");
        break;

    

   
default:
        
        alert
alert("Intenta de nuevo, " + nombre);
        
       
break;
}

let cuotas = prompt("Escribe la cantidad de cuotas que prefieres: 1, 12 o 24");

if (cuotas === "1") {
    
    
   
switch (seleccion) {
        case "Gold":
            
           
alert("Precio final es $8.000.000");
            break;

        case "Golf":
            
            alert
alert("Precio final es $12.000.000");
            break;

        case "Polo":
            alert("Precio final es $15.000.000");
            break;
    }
} 
    
else if (cuotas === "12") {
    switch (seleccion) {
        case "Gold":
            alert("Precio final es $12.000.000");
            break;

        case "Golf":
            alert("Precio final es $18.000.000");
            break;

        case "Polo":
            
           
alert("Precio final es $22.500.000");
            break;
    }
} else if (cuotas === "24") {
    switch (seleccion) {
        case "Gold":
            alert("Precio final es $14.400.000");
            break;

        case "Golf":
            
           
alert("Precio final es $21.600.000");
            break;

        case "Polo":
            alert("Precio final es $27.000.000");
            break;
    }
} else {
    alert("Selección de cuotas no válida");
}

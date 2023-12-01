function mostrarElección() {
    // Obtener el valor seleccionado del auto
    var seleccionAuto = document.getElementById("autos").value;
    
    // Obtener el valor seleccionado de las cuotas
    var pagos = document.getElementById("lasCuotas").value;
  
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var dni = document.getElementById("dni").value;
    
  
    var autoSeleccionado = document.getElementById("autos").value;
    var cuotas = document.getElementById("cuotas").value;
    console.log = mostrarElección
}
document.getElementById("botonConfirmar").addEventListener("click", function() {
  
        // Crear un nuevo documento con los datos del usuario y el botón de confirmación
        var nuevoDocumento = `
          <html>
          <head>
            <title>Confirmación de datos</title>
          </head>
          <body>
            <h1>Tus datos</h1>
            <p>Nombre: ${nombre}</p>
            <p>Correo: ${correo}</p>
            <p>Numero de DNI: ${dni}</p>
            <p>Auto seleccionado: ${autoSeleccionado}</p>
            <p>Número de cuotas: ${cuotas}</p>
            
            <button onclick="confirmarDatos()">Confirmar datos</button>
          </body>
          </html>
        `;
  
        // Obtener el iframe
        var contenedor = document.getElementById("contenedor");
        contenedor.srcdoc = nuevoDocumento;
     })
  
      // Función para ejecutar cuando se confirman los datos en el nuevo documento
      function confirmarDatos() {
        // Agregar aquí la lógica para confirmar los datos
        alert("Datos confirmados");
      }
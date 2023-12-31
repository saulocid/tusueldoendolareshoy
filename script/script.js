const apiUrl = 'https://api.bluelytics.com.ar/v2/latest';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const valorBlue = data.blue.value_sell;
        numero2Input.value = valorBlue;
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    });

document.getElementById("calcular").addEventListener("click", function () {
    var numero1 = parseFloat(numero1Input.value);
    var numero2 = parseFloat(numero2Input.value);

    if (!isNaN(numero1) && !isNaN(numero2) && numero2 !== 0) { 
        var producto = (numero1 / numero2).toFixed(2);
        document.getElementById("producto").value = producto;
    } else {
        alert("Por favor, ingrese un monto válido en el campo");
    }
});

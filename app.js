const fs = require('fs');

function filtrar(numeros, resultado) {
    let count = 0;
    for (let i = 0; i < numeros.length; i++) {
        let numStr = numeros[i].toString();
        if (numStr[0] === numStr[numStr.length - 1]) {
            resultado.push(numeros[i]);
            count++;
        }
    }
    return count;
}

// lee el archivo txt
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const numeros = data.trim().split(' ').map(Number);
    const resultado = [];

    const cantidadCumplen = filtrar(numeros, resultado);

    console.log(cantidadCumplen);
    console.log(resultado.join(' '));
});
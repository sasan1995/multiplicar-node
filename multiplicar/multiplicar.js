const fs = require("fs"); // nativos de node
// const fs = require('express'); no nativos
// const fs = require('./app'); nuestros archivos

let listarTabla = (base, limite = 10) => {
    for (i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`no es un numero`);
        }

        let data = ``;

        for (let i = 1; i < limite; i++) {
            data += ` ${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};
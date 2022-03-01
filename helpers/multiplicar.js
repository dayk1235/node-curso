const fs = require('fs'); // Paquete de node para crear archivos
const colors = require('colors');

const crearTabla = async (base = 1, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i} \n`);
        };

        if (listar){
            console.log('=================='.green);
            console.log("Tabla del".america, colors.red(base), 'Hasta el numero'.america, colors.red(hasta));
            console.log('=================='.green);
            console.log(salida.rainbow.bgWhite.blue);
        }

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        return (`Tabla${base}.txt`);

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearTabla
};

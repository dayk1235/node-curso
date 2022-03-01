const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);
// console.log('base: yargs', argv.b);

crearTabla(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, '\n¡Creada con Exito!'.bgRed))
.catch(err => console.error(err));

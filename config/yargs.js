const argv = require('yargs')
        .options('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la multiplicacion'
        })
        .options('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra en pantalla la multiplicacion'

                    
        })

        .options('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que numero va a llegar la tabla'
        })
        .check((argv, options) => {
             if( isNaN (argv.b) ){
                 throw 'La base tiene que ser un numero';
                }
             return true;
        })
        .argv;

        module.exports = argv;
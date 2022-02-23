const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base a multiplicar'
    })
    .option("h", {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Liminte de la tabla de multiplicar'
    })  
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser una numero';
        }
        if( isNaN( argv.h ) ){
            throw 'H debe ser un numero';
        }
        return true;
    })
    .option("l", {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'mostrar la tabla en consola'

    })  
    .check( (argv, options) => {
        if( false ){
            throw 'l debe ser un boleano';
        }
        return true;
    }).argv

module.exports = argv;
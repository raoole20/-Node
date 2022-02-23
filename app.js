const { craerArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// console.log(process.argv)
// const [ , , comando = 'base=5' ] = process.argv;
// let   [ ,  base ] = comando.split('=');
// base = parseInt( base )

craerArchivo( argv.base , argv.h, argv.l )
    .then ( () => console.log("Tabla creada con exito \n") )
    .catch( (err)    => console.log(err));


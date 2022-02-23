const { rejects } = require('assert');
const { resolve } = require('path');
const fs = require('fs');
require('colors');

const craerArchivo = async ( base = 5, hasta = 10, l = false) => {
   
    try{

        console.log('==================================================='.green)
        console.log(`            Tabla de multiplicar :           ` , base );
        console.log('==================================================='.green)

        let  salida;

        for( let  i = 0; i <= hasta ; i++ ){
            let resultado = base * i;
            if( i % 2 === 0){
                salida += `${base} x ${i} = ${resultado} \n`;
            }else{
                salida += `${base} x ${i} = ${resultado} \n`;
            }
        }
        fs.writeFileSync(`./tabla/tabla-${base}.txt`, salida);

        if( l ){
             console.log(salida);
        }
        return salida;

    }catch ( err ){
        console.log('Ha ocurrido un error');
        throw( err);
    }
}


// module: exportar objetos 
module.exports = {
    //exporta funcion y crear la varible
    craerArchivo 
}

 











// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if(err) throw err;
//     console.log(`tabla-${base}.txt creado con exito`);
// });
import jsonfile from 'jsonfile';
const PATH = './data.json';

const db = jsonfile.readFileSync(PATH);

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ COMPLETAR SOLO ESTA FUNCIÓN ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function obtenerProvinciasSegunMeridiano(meridiano) {

   
   
    let resultado = db.provincias.filter((provincia) => Math.abs(Math.trunc(provincia.centroide.lon)) == meridiano)

    return resultado
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ COMPLETAR SOLO ESTA FUNCIÓN ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export default obtenerProvinciasSegunMeridiano;
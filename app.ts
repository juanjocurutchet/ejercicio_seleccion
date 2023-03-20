import { CuerpoMedico } from "./cuerpoMedico";
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolistas";
import { IntegranteSeleccion } from "./integrantesSeleccion";
import { Masajista } from "./masajista";
import { Selección } from "./seleccion";


const futbolista1= new Futbolista("Lionel","Messi","858689","12/06/1995","delantero");
const futbolista2= new Futbolista("Julian","Alvarez","698954","10/3/2001","delantero");

const entrenadorSeleccion= new Entrenador("Lionel","Scaloni","235647","8/02/1980",6);

const masajistaSeleccion= new Masajista("juan","Mamani","695425","01/12/78", "masajista");

const cuerpoMedicoSeleccion= new CuerpoMedico(masajistaSeleccion,456323);

const seleccion= new Selección("Argentina",[],entrenadorSeleccion,masajistaSeleccion);

seleccion.incluirFutbolista(futbolista1);
seleccion.incluirFutbolista(futbolista2);

futbolista1.presentacion()
entrenadorSeleccion.presentacion()
masajistaSeleccion.presentacion()
console.log(futbolista1);
console.log(futbolista2);
console.log(entrenadorSeleccion)
console.log(cuerpoMedicoSeleccion)
console.log(seleccion)




import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolistas";
import { Masajista } from "./masajista";

//Aplico composicion de las clases Futbolista, Entrenador y Masajista en la Clase Seleccion...

export class Selección {
    private pais: string;
    private futbolistas: Futbolista[];
    private entrenador: Entrenador;
    private masajista: Masajista;

    constructor(pais: string, futbolistas: Futbolista[], entrenador: Entrenador, masajista: Masajista) {

        this.pais = pais;
        this.futbolistas = [];
        this.entrenador = entrenador;
        this.masajista = masajista;
    }
    public getPais(): string {
        return this.pais;
    }
    public setPais(pais: string): void {
        this.pais = pais;
    }

    public incluirFutbolista(futbolista: Futbolista): void {
        this.futbolistas.push(futbolista);
    }

}
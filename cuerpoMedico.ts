import { Masajista } from "./masajista";

//Composicion con clase Masajista...

export class CuerpoMedico {

    private masajista: Masajista;
    private numeroMatricula: number;
    
    constructor(masajista: Masajista, numeroMatricula: number) {
        this.masajista = masajista
        this.numeroMatricula = numeroMatricula
    }

    public getNumeroMatricula(): number {
        return this.numeroMatricula;
    }
    public setNumeroMatricula(numeroMatricula: number): void {
        this.numeroMatricula = numeroMatricula;
    }
}





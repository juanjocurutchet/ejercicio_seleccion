import { IntegranteSeleccion } from "./integrantesSeleccion";

// Clase para los futbolistas, que hereda de IntegranteSeleccion...

export class Futbolista extends IntegranteSeleccion {
    private posicion: string;

    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: string, posicion: string) {
        super(nombre, apellido, numeroPasaporte, fechaNacimiento);
        this.posicion = posicion;
    }

    public getPosicion(): string {
        return this.posicion;
    }
    public setPosicion(posicion: string): void {
        this.posicion = posicion;
    }

    // Método donde aplico polimorfismo en esta clase hija...

    public presentacion() {
        console.log(`Hola, soy ${this.getNombre()} ${this.getApellido()} y juego como ${this.posicion}`);
    }
}
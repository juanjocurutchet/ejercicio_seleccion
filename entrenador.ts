import { IntegranteSeleccion } from "./integrantesSeleccion";

// Clase para el entrenador, que hereda de IntegranteSeleccion...

export class Entrenador extends IntegranteSeleccion {
    private experiencia: number;

    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: string, experiencia: number) {
        super(nombre, apellido, numeroPasaporte, fechaNacimiento);
        this.experiencia = experiencia;
    }

    public getExperiencia(): number {
        return this.experiencia;
    }
    public setExperiencia(experiencia: number): void {
        this.experiencia = experiencia;
    }

    // Método donde aplico polimorfismo en esta clase hija...
    public presentacion() {
        console.log(`Hola, soy ${this.getNombre()} ${this.getApellido()} y tengo ${this.experiencia} años de experiencia como entrenador`);
    }
}
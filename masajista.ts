import { IntegranteSeleccion } from "./integrantesSeleccion";

// Clase para el masajista, que hereda de IntegranteSeleccion...

export class Masajista extends IntegranteSeleccion {
    private especialidad: string

    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: string,
        especialidad: string) {
        super(nombre, apellido, numeroPasaporte, fechaNacimiento)
        this.especialidad = especialidad;
    }
    public getEspecialidad(): string {
        return this.especialidad;
    }
    public setEspecilidad(nombre: string): void {
        this.especialidad = this.especialidad;
    }

    // Método donde aplico polimorfismo en esta clase hija...
    public presentacion() {
        console.log(`Hola, soy ${this.getNombre()} ${this.getApellido()} y soy el ${this.especialidad} de la seleccion`);
    }


}
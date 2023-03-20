/*Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista.
Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
Aplicar herencia donde sea posible.
Aplicar composicion en UNA clase hija
Elija un metodo de la clase padre y aplique polimorfismo en las clases Hijas */

// Clase padre para los integrantes de la selección...

export class IntegranteSeleccion {
    private nombre: string;
    private apellido: string;
    private numeroPasaporte: string;
    private fechaNacimiento: string;
    constructor(nombre: string, apellido: string, numeroPasaporte: string, fechaNacimiento: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroPasaporte = numeroPasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public getPasaporte(): string {
        return this.numeroPasaporte;
    }
    public setPasaporte(numeroPasaporte: string): void {
        this.numeroPasaporte = numeroPasaporte;
    }
    public getFechaNacimiento(): string {
        return this.fechaNacimiento;
    }
    public setFechaNacimiento(fechaNacimiento: string): void {
        this.fechaNacimiento = fechaNacimiento;
    }
}









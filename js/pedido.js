class pedido{
    static count = 0;
    constructor(nombre, apellido, flor, desc){
        this.id = ++pedido.count;
        this.nombre=nombre;
        this.apellido=apellido;
        this.flor=flor;
        this.desc=desc;
    }
}
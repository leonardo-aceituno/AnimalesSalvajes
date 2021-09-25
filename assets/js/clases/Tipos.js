import Animal from './Animal.js'
export { Leon, Lobo, Oso, Serpiente, Aguila }


class Leon extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    rugir(){
        let sonido = this.sonido
        return sonido
        
    }
}


class Lobo extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }

    aullar(){
        console.log('Lobo aullando');
    }
}


class Oso extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }

    grunir(){
        console.log('Gruñir Oso');
    }
}

class Serpiente extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }

    sisear(){
        console.log('FC sisear Serpiente');
    }
}

class Aguila extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }

    chillar(){
        console.log('Fc Chillar Aguila');
    }
}
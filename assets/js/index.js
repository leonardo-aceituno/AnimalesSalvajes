import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
} from './clases/Tipos.js'


// Capturar cambios en el select
animal.addEventListener('change', (e) => {
    let nombreId = e.target.value;
    vistaPrevia(nombreId);
})

// Vista previa 
const vistaPrevia = async (nombreId) => {
    try {
        const url = './animales.json'
        const response = await fetch(url);
        const datos = await response.json();
        const animales = datos.animales;
        animales.forEach(element => {
            if (element.name == nombreId) {
                let preview = document.querySelector('#preview');
                let archivo = `../assets/imgs/${element.imagen}`;
                preview.style.backgroundImage = `url(${archivo})`;
            }
        })

    } catch (e) {
        console.log(e);
    }
}


// Capturar click boton "registar"
btnRegistrar.addEventListener('click', () => {
    let nombreId = document.querySelector('#animal').value;
    let edad = document.querySelector('#edad').value;
    let comentarios = document.querySelector('#comentarios').value;

    if(nombreId == "" || edad == "" || comentarios == ""){
        alert('Tienes campos sin completar')
    }else {
        registrar(nombreId, edad, comentarios);
        limpiar.formulario();
    }
})


// limpiar campos formulario --> funcion IIFE
const limpiar = (() => {
    let borrar = () => {
        document.querySelector('#animal').value = "";
        document.querySelector('#edad').value = "";
        document.querySelector('#comentarios').value = "";
        preview.style.backgroundImage = "";
    }

    return {
        formulario: () => borrar()
    }
})()


// funcion registrar
const registrar = async (nombreId, edad, comentarios) => {
    try {
        const url = './animales.json'
        const response = await fetch(url);
        const datos = await response.json();
        const animales = datos.animales;
        let listaAnimales = []
        animales.forEach(element => {

            if (element.name == nombreId) {
                switch (element.name) {
                    case 'Lobo':
                        const lobo = new Lobo(element.name, edad, element.imagen, comentarios, element.sonido);
                        listaAnimales.push(lobo)
                        break;

                    case 'Leon':
                        const leon = new Leon(element.name, edad, element.imagen, comentarios, element.sonido);
                        listaAnimales.push(leon)
                        break;

                    case 'Oso':
                        const oso = new Oso(element.name, edad, element.imagen, comentarios, element.sonido);
                        listaAnimales.push(oso)
                        break;

                    case 'Aguila':
                        const aguila = new Aguila(element.name, edad, element.imagen, comentarios, element.sonido);
                        listaAnimales.push(aguila)
                        break;

                    case 'Serpiente':
                        const serpiente = new Serpiente(element.name, edad, element.imagen, comentarios, element.sonido);
                        listaAnimales.push(serpiente)
                        break;
                }

            }

        })
        insertar(listaAnimales);
    } catch (e) {
        console.log(e);
    }
}


// Insertar animales registrados
const insertar = (listaAnimales) => {
    const template = document.querySelector('#Animales')
    const templateModal = document.querySelector('#modal')


    // console.log(listaAnimales);

    listaAnimales.forEach((element, i) => {
        template.innerHTML += /*html*/
        ` 
            <div class='px-3 pb-2'>
                <div class='bg-dark text-white'>
                    <img 
                        class='img' 
                        src="../assets/imgs/${element.getImg()}"                   
                        data-toggle="modal" data-target="#${element.getNombre()}"    
                    />
                </div>
            </div>
        `
        
        templateModal.innerHTML += /*html*/
        ` 
         <div class="modal fade" id="${element.getNombre()}">
            <div class="modal-dialog modal-dialog-centered w-25" role="document">
                <div class="modal-content bg-dark">
                    <div class="modal-body">
                    <img 
                        class='img_modal' 
                        src="../assets/imgs/${element.getImg()}"                   
                    />
                    </div>
                    <div class='container'>
                        <p class='text-white'><b>Comentario: </b><i>${element.getComentarios()}</i></p>
                        <p class='text-white'><b>Edad      : </b><i>${element.getEdad()}</i></p>
                    </div>
                </div>
            </div>
        </div> 
        `
        
    })
}
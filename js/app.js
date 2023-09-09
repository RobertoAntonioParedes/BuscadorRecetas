//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
};


//Eventos
document.addEventListener('DOMContentLoaded', ()=> {
mostrarAuto(autos);//Agrega los datos de los autos en el HTML

selectAño();//LLena la opcion de años con los años disponibles
    

});

//Event Listener para los select de busqueda
marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value; 
    console.log(datosBusqueda);

    filtrarAuto();
});

year.addEventListener('change', (e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    
    filtrarAuto();
});

minimo.addEventListener('change', (e)=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (e)=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

//Funciones
function mostrarAuto(autos){
    //Limpiar HTML
    limpiarHtml();

    autos.forEach((auto)=>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('P');
        autoHtml.textContent = `
        Auto: ${marca}  
        Modelo:${modelo} ${year}-${puertas} Puertas-Transmisión: ${transmision}-$${precio}-Color:${color}
        
        `;
        //Resultado en Html
        resultado.appendChild(autoHtml);
    });
};

//funcion limpiar Html
function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    
    };


//Genera los años en el select
function selectAño(){
    for( let i = max; i>=min; i-- ){
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i,

        year.appendChild(opcion); //Agrega las opciones de años en el select
    }

    };
//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAuto(resultado);
    }else{
        noResultado();
    };
};

function noResultado(){
    const sinResultado = document.createElement('DIV');
    sinResultado.classList.add('alerta', 'error');
    sinResultado.textContent = 'No se encontraron resultados';
    resultado.appendChild(sinResultado);
};

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }else{
        return auto;
    };
};

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }else{
        return auto;
    };

};

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }else{
        return auto;
    };
};

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }else{
        return auto;
    };
};

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }else{
        return auto;
    };
};

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }else{
        return auto;
    };
};

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }else{
        return auto;
    };
};


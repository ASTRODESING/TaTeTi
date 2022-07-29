/* variables */
let turno = 'O';
let historial = 0;
const botones = document.querySelectorAll('.boton')
const reinici = document.querySelector('.reinicio')
const mensa = document.querySelector('.mensaje')
const final = document.querySelector('.ganador')
let tablero=[];
/* eventos */

Eventos()
function Eventos(){
    botones.forEach((btn, i)=>{
        btn.addEventListener('click', (e) =>cambioDeTurno(e))
    })
    reinici.addEventListener('click',reinicio)
}

/* funciones */
function cambioDeTurno(e){
    turno = (turno == 'O')? 'X':'O';
    historial++
    let pulsado = e.target.getAttribute('data-id')
    if(turno=='O'){
        e.target.disabled=true
        tablero[pulsado -1] = 'green'
        e.target.style.backgroundColor='green';
    }else{
        e.target.disabled=true
        tablero[pulsado -1] = 'red'
        e.target.style.backgroundColor='red';
    }
    ganador()
}




function ganador(){
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        
        mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[2]

    } else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        
        mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[5]

    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
          
        mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[8]

    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
    
                mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[6]

    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){

                mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[7]

    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){

                mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[8]

    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
  
                mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[8]

    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
     
                mensa.style.display='flex';
        final.textContent= 'Ha ganado el jugador ' + tablero[6]

    } else if(historial == 9){
        mensa.style.display='flex';
        final.textContent= 'Empate !!!'
    }
}

function reinicio(){
    historial = 0
  tablero = [];
  mensa.style.display='none';
    botones.forEach((e) =>{
        e.disabled=false;
        e.style.backgroundColor = 'white';
    })
}
console.log('Muchas Gracias Por Probar mi Codigo')
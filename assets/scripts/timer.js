const relogio = document.querySelector('#timer');
let timer;
let segundos = 0;

function getFromSeconds(segundos) {
   let date = new Date(segundos * 1000);
   return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
   });
}

const iniciar = () => {
   timer = setInterval(() => {
      segundos++;
      temporizar(segundos);
   }, 1000);
}

const temporizar = (tempo) => {
   relogio.innerHTML = getFromSeconds(tempo);
}

const pausar = () => {
   relogio.classList.add('pausa');
   clearInterval(timer);
}

const zerar = () => {
   relogio.classList.remove('pausa');
   clearInterval(timer);
   segundos = 0;
   relogio.innerHTML = '00:00:00';
}


document.addEventListener('click', (event) => {
   const element = event.target;

   if (element.classList.contains('iniciar')) {
      relogio.classList.remove('pausa');
      clearInterval(timer);
      iniciar();
   }

   if (element.classList.contains('pausar')) {
      pausar();
   }

   if (element.classList.contains('reset')) {
      zerar();
   }
});

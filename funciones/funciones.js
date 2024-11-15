function mensaje() {
    alert("Aquí encontrarás toda la información necesaria. Gracias por visitarnos.");
    }

var timer=null;
   function vertical(capa, incr, vel){
      let txt = document.getElementById(capa);
      let limVer, repetir;
      let posAct = txt.offsetTop+incr ; 
      clearTimeout(timer);
      txt.style.top = posAct+"px";
      //arriba: incr < 0
      if(incr<0){
         repetir = posAct > -txt.offsetHeight;
      }
      else{
         repetir = posAct < txt.parentElement.offsetHeight;
      }
   if (!repetir){
      let reini = incr>0?-txt.offsetHeight:txt.parentElement.offsetHeight
      txt.style.top = reini+"px";
      }
      timer=setTimeout(vertical, vel, capa, incr, vel);
}
//Muestra u oculta una capa
function verCapa(obj, sn){
   let mostrar = (sn)?'block':'none';
   let estado = (sn)?'visible':'hidden';
   obj.style.display = mostrar;
   obj.style.visibility= estado; 
}

// función rollover para el menú navegador de todas las páginas


function cambProp(obj, prop, valor){
   let span
   (span=document.getElementById(obj))
   span.style[prop]= valor;
}

// fecha última actualización

function ultActual()
{ 
  let cfecha = document.lastModified; 
  let meses = new Array("Enero", "Febrero","Marzo","Abril", "Mayo","Junio", "Julio",   "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"); 
  let fecha = new Date(Date.parse(cfecha)); 
  let dia = fecha.getDate(); 
  let mes = meses[fecha.getMonth()]; 
  let agno = fecha.getFullYear(); 
  return (dia +" de "+mes +" de "+agno); 
} 

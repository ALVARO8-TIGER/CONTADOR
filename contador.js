let contador = 0;
const valor = document.getElementById("valor");
const aumentarButton = document.getElementById("aumentar");
const disminuirButton = document.getElementById("disminuir");
const resetButton = document.getElementById("reset");

aumentarButton.onclick= function() {
    contador++;
    valor.innerHTML= contador;

}
disminuirButton.onclick= function(){
    contador--;
    valor.innerHTML= contador;

}
resetButton.onclick= function(){
    contador=0;
    valor.innerHTML= contador; 
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//creo array de imágenes 
var array_imagen;
array_imagen = new Array(4) ;
array_imagen[0] = new Image(120,41) ;
array_imagen[0].src = "Imagenes/img1.jpg" ;
array_imagen[1] = new Image(120,41) ;
array_imagen[1].src = "Imagenes/img2.jpg" ;
array_imagen[2] = new Image(120,41) ;
array_imagen[2].src = "Imagenes/img3.png"; 
array_imagen[3] = new Image(120,41) ;
array_imagen[3].src = "Imagenes/img4.jpg";

//variable para llevar la cuenta de la imagen siguiente 
contador = 0 ;

//función para rotar el banner 
function alternar_banner(){ 
   	window.document["banner"].src = array_imagen[contador].src ;
   	contador ++ ;
   	if(contador>3){contador=0;} 
   	setTimeout("alternar_banner()",10000) ;
}
function izquierda(){
    contador--;
    if(contador<0) contador=4;
    window.document["banner"].src = array_imagen[contador].src ;
}
function derecha(){
    contador++;
    if(contador>3) contador=0;
    window.document["banner"].src = array_imagen[contador].src ;
}


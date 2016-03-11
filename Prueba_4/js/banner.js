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
   	contador = contador % array_imagen.length ;
   	setTimeout("alternar_banner()",1000) ;
}
function cambio (s){
    switch(s){
        case "1":window.document["banner"].src = array_imagen[0].src;
                contador=0;
                break;
        case "2":window.document["banner"].src = array_imagen[1].src;
                contador=1;
                break;
        case "3":window.document["banner"].src = array_imagen[2].src;
                contador=2;
                break;
        case "4":window.document["banner"].src = array_imagen[3].src;
                contador=3;
                break;
        default:window.document["banner"].src = array_imagen[1].src;
                contador=1;
                break;
    }
}


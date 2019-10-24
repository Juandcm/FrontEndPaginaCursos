$(document).ready(function(){
  AOS.init({ disable: 'mobile' });
});
(() => {
    $('#mm-example-1').metisMenu();
})();
function init(){
 $("#imagen1").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});
 $("#imagen2").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});
 $("#imagen3").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});
 $("#imagen4").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});
 $("#imagen5").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});
 $("#imagen6").elevateZoom({
  zoomType : "inner",
  cursor: "crosshair"
});



}


$('#boton1').on('click',verificarImagen1);
$('#boton2').on('click',verificarImagen2);
$('#boton3').on('click',verificarImagen3);
$('#boton4').on('click',verificarImagen4);
$('#boton5').on('click',verificarImagen5);
$('#boton6').on('click',verificarImagen6);



$('#button1').on('click',verificar1);
$('#button2').on('click',verificar2);
$('#button3').on('click',verificar3);
$('#button4').on('click',verificar4);
$('#button5').on('click',verificar5);
$('#button6').on('click',verificar6);

$('#lista1').on('click',primeraseccion);
$('#lista2').on('click',segundaseccion);
$('#lista3').on('click',terceraseccion);
$('#lista4').on('click',cuartaseccion);

function primeraseccion(){

$('#primera').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
}
function segundaseccion(){
$('#segunda').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
}
function terceraseccion(){
  $('#tercera').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
}
function cuartaseccion(){
  $('#cuarta').animatescroll({padding:-100});
}


function verificar1(){
  var names1=$("#namecurso1").html();
  var img1 = $("#img1").attr('src');
  var descriptions1 = $("#descriptioncurso1").html();
swal({
  title: names1,
  text: descriptions1,  
  imageUrl: img1,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}

function verificar2(){
    var name2=$("#namecurso2").html();
    var img2 = $("#img2").attr('src');
  var description2 = $("#descriptioncurso2").html();
  swal({
  title: name2,
  text: description2,
  imageUrl: img2,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}
function verificar3(){
    var name3=$("#namecurso3").html();
    var img3= $("#img3").attr('src');
  var description3 = $("#descriptioncurso3").html();
  swal({
  title: name3,
  text: description3,
  imageUrl: img3,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}
function verificar4(){
    var name4=$("#namecurso4").html();
    var img4= $("#img4").attr('src');
  var description4 = $("#descriptioncurso4").html();
  swal({
  title: name4,
  text: description4,
  imageUrl: img4,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}
function verificar5(){
    var name5=$("#namecurso5").html();
    var img5= $("#img5").attr('src');
  var description5 = $("#descriptioncurso5").html();
swal({
  title: name5,
  text: description5,
  imageUrl: img5,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}
function verificar6(){
  var name6=$("#namecurso6").html();
  var img6= $("#img6").attr('src');
  var description6 = $("#descriptioncurso6").html();
swal({
  title: name6,
  text: description6,
  imageUrl: img6,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}


function verificarImagen1(){ 
var name1=$("#name1").html();
var imagen1 = $("#imagen1").attr('src');
var description1 = $("#description1").html();


swal({
  title: name1,
  text: description1,
  imageUrl: imagen1,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});
}


function verificarImagen2(){ 
var name2=$("#name2").html();
var imagen2 = $("#imagen2").attr('src');
var description2 = $("#description2").html();

swal({
  title: name2,
  text: description2,
  imageUrl: imagen2,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});

}

function verificarImagen3(){
var name3=$("#name3").html();
var imagen3 = $("#imagen3").attr('src');
var description3 = $("#description3").html();

swal({
  title: name3,
  text: description3,
  imageUrl: imagen3,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});

}


function verificarImagen4(){
var name4=$("#name4").html();
var imagen4 = $("#imagen4").attr('src');
var description4 = $("#description4").html();

swal({
  title: name4,
  text: description4,
  imageUrl: imagen4,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});

}

function verificarImagen5(){
var name5=$("#name5").html();
var imagen5 = $("#imagen5").attr('src');
var description5 = $("#description5").html();

swal({
  title: name5,
  text: description5,
  imageUrl: imagen5,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});

}

function verificarImagen6(){
var name6=$("#name6").html();
var imagen6 = $("#imagen6").attr('src');
var description6 = $("#description6").html();

swal({
  title: name6,
  text: description6,
  imageUrl: imagen6,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  customClass: 'animated tada'
});

}


$(document).on("scroll",scrolldelraton);

function scrolldelraton(){
 var desplazamiento=$(document).scrollTop();
 var bajar = $("#bajar");
 var lista1=$("#lista1");
 var lista2=$("#lista2");
 var lista3=$("#lista3");
 var lista4=$("#lista4");

 var posicion1 = 580;
 var posicion2=1600;
 var posicion3=2500;
 var posicion4=3000;


 if (desplazamiento>posicion1) {
  bajar.addClass("fixed-top");
 lista1.addClass("blanco");
 }else{
  bajar.removeClass("fixed-top");
  lista1.removeClass("blanco");
 }

if (desplazamiento>posicion2) {
    lista2.addClass("blanco");
    lista1.removeClass("blanco");
 }else{
  lista2.removeClass("blanco");
 }

 if (desplazamiento>posicion3) {
    lista3.addClass("blanco");
    lista2.removeClass("blanco");
 }else{
  lista3.removeClass("blanco");
 }
  if (desplazamiento>posicion4) {
    lista4.addClass("blanco");
    lista3.removeClass("blanco");
 }else{
  lista4.removeClass("blanco");
 }

}

$("#php1").on("click",cambiarphp1);
$("#php2").on("click",cambiarphp2);
$("#php3").on("click",cambiarphp3);
$("#php4").on("click",cambiarphp4);

$("#html1").on("click",cambiarhtml1);
$("#html2").on("click",cambiarhtml2);
$("#html3").on("click",cambiarhtml3);
$("#html4").on("click",cambiarhtml4);

$("#laravel1").on("click",cambiarlaravel1);
$("#laravel2").on("click",cambiarlaravel2);
$("#laravel3").on("click",cambiarlaravel3);
$("#laravel4").on("click",cambiarlaravel4);


$("#Diseño").on("click",Diseño);
$("#Desarrollo").on("click",Desarrollo);
$("#BD").on("click",BD);
$("#CursosDisponibles").on("click",CursosDisponibles);
$("#nosotros").on("click",nosotros);
$("#Contacto").on("click",Contacto);

function Diseño(){

var Diseño="Diseño WEB";
var DESCRIPTIONDISEÑO = "Actualmente se puede observar que el Diseño web es utilizado en la página web";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});

}
function Desarrollo(){
 var Diseño="Desarrollo WEB";
var DESCRIPTIONDISEÑO = "Actualmente se puede observar que el Desarrollo web es utilizado en la página web";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});
}
function BD(){
var Diseño="Base de Datos";
var DESCRIPTIONDISEÑO = "Esta página web no utiliza Base de Datos, ya que solo se trabajo con el Front-End de la Página";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});
}
function CursosDisponibles(){
var Diseño="Cursos Disponibles";
var DESCRIPTIONDISEÑO = "Existen muchos cursos disponibles en la web que permiten dar el conocimiento para crear este tipo de página web";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});
}
function nosotros(){
var Diseño="Nosotros";
var DESCRIPTIONDISEÑO = "Somos estudiantes del 7 semestre de la Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora, somos programadores en busca de conocimiento";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});
}
function Contacto(){
var Diseño="Contacto";
var DESCRIPTIONDISEÑO = "Nuestras formas de contacto es en la Universidad o mediante Correo";

swal({
  title: Diseño,
  text: DESCRIPTIONDISEÑO,
  customClass: 'animated tada'
});
}



function cambiarphp1(){
  var enlace= "https://www.youtube.com/embed/sEfcmo-THjM";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarphp2(){
  var enlace= "https://www.youtube.com/embed/feFxj6xz0hE";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarphp3(){
  var enlace= "https://www.youtube.com/embed/R6PdB1SktCg";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarphp4(){
  var enlace= "https://www.youtube.com/embed/vI4-40Nfnis";
  $("#videoYoutube").attr("src",enlace);
}


function cambiarhtml1(){
  var enlace= "https://www.youtube.com/embed/QC9_8nRNNHA";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarhtml2(){
  var enlace= "https://www.youtube.com/embed/CdfMG_Qy00E";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarhtml3(){
  var enlace= "https://www.youtube.com/embed/F-cDjBkSRT4";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarhtml4(){
  var enlace= "https://www.youtube.com/embed/Wjgv2GJUe2I";
  $("#videoYoutube").attr("src",enlace);
}

function cambiarlaravel1(){
  var enlace= "https://www.youtube.com/embed/0sHSrqyZCnM";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarlaravel2(){
  var enlace= "https://www.youtube.com/embed/SbdbHvf5b7c";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarlaravel3(){
  var enlace= "https://www.youtube.com/embed/l9iOi4UGtCE";
  $("#videoYoutube").attr("src",enlace);
}
function cambiarlaravel4(){
  var enlace= "https://www.youtube.com/embed/PuCdTAayogg";
  $("#videoYoutube").attr("src",enlace);
}

init();

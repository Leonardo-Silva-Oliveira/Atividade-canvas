var c = document.getElementById("desenho");
//Caso o canvas não for compativel o site irá avisar.
if(c.getContext){
var ctx = c.getContext("2d");
//Posição inicial da linha.

//Chamando as funções criadas.
triangulo();
circulo();
quadrado();
retangulo();
curva1();
curva2();
curva3();
curva4();
imagem();
texto();

//Funções para cada forma, curva, texto e imagens.
function triangulo(){
ctx.moveTo(750, 100);
//Posição em que a linha irá.
ctx.lineTo(650, 250);

ctx.lineTo(850, 250);

ctx.lineTo(750, 100);

var grd = ctx.createLinearGradient(150, 0, 750, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fill();
}
function circulo(){
ctx.moveTo(1000, 175);
//Criação do circulo.
ctx.arc(1000, 175, 75, 0, 2 * Math.PI);

var grd = ctx.createLinearGradient(150, 0, 750, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fill();
}
function quadrado(){
ctx.moveTo(400, 100);

ctx.lineTo(550, 100);

ctx.lineTo(550, 250);

ctx.lineTo(400, 250);

ctx.lineTo(400, 100);

var grd = ctx.createLinearGradient(150, 0, 750, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fill();
}
function retangulo(){
ctx.moveTo(100, 150);

ctx.lineTo(250, 150);

ctx.lineTo(250, 250);

ctx.lineTo(100, 250);

ctx.lineTo(100, 150);

var grd = ctx.createLinearGradient(150, 0, 750, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fill();
}
function curva1(){

ctx.moveTo(430, 350);
ctx.quadraticCurveTo(450, 280, 475, 250);

ctx.strokeStyle = "green";
ctx.stroke();
}
function curva2(){
	ctx.moveTo(390, 530);
	ctx.quadraticCurveTo(200, 400, 175, 250);
	
ctx.strokeStyle = "green";
ctx.stroke();
}
function curva3(){
	ctx.moveTo(720, 350);
	ctx.quadraticCurveTo(770, 300, 750, 250);
	
ctx.strokeStyle = "green";
ctx.stroke();
}
function curva4(){
	ctx.moveTo(810, 530);
	ctx.quadraticCurveTo(900, 420, 1000, 250);
	
ctx.strokeStyle = "green";
ctx.stroke();
}
function texto(){
	ctx.font = "32px Times New Roman";
//Definição do conteúdo e posição do texto.
ctx.strokeText("Formas Geometricas", 480, 50)

ctx.strokeStyle = "green";
ctx.stroke();
}
function imagem(){
var img = new Image();
img.src = "Imagem1.png";

img.onload = function(){
ctx.drawImage(img, 400, 350, 400, 200);};
}
}else{
	alert("O conteúdo do site é incompativel");
}
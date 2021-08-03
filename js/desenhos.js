var c = document.getElementById("desenho");

var ctx = c.getContext("2d");
//Posição inicial da linha.
ctx.moveTo(200, 100);
//Posição em que a linha irá.
ctx.lineTo(100, 250);

ctx.lineTo(300, 250);

ctx.lineTo(200, 100);
//Definição da cor do texto.
ctx.fillStyle = "green";

ctx.moveTo(500, 170);
//Criação do circulo.
ctx.arc(500, 170, 75, 0, 2 * Math.PI);

ctx.moveTo(700, 100);

ctx.lineTo(850, 100);

ctx.lineTo(850, 250);

ctx.lineTo(700, 250);

ctx.moveTo(950, 150);

ctx.lineTo(1100, 150);

ctx.lineTo(1100, 250);

ctx.lineTo(950, 250);

ctx.lineTo(950, 150);
//Definição da fonte do texto.
ctx.font = "32px Times New Roman";
//Definição do conteúdo e posição do texto.
ctx.fillText("Formas Geometricas", 480, 50)
//Definição das cores das linhas e de seus preenchimentos.
ctx.fillStyle = "red";
ctx.fill();
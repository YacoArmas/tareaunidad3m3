var distancia = prompt("Ingrese distancia");
distancia = parseInt(distancia);

if (distancia <= 1000) {
  document.write("Te conviene ir a pie");
} else if (distancia > 1000 && distancia < 10000) {
  document.write("Te conviene ir en bicicleta");
} else if (distancia > 10000 && distancia < 30000) {
  document.write("Te conviene ir en colectivo");
} else if (distancia > 30000 && distancia < 100000) {
  document.write("Te conviene ir en auto");
} else if (distancia >= 100000) {
  document.write("Te conviene ir en avion");
}

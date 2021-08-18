var edadJuan = prompt("Ingrese la edad de Juan");

var edadSofia = prompt("Ingrese la edad de Sofia");

var edadLucas = prompt("Ingrese la edad de Lucas");

var edadHernan = prompt("Ingrese la edad de Hernan");

var edadMaria = prompt("Ingrese la edad de Maria");

document.write(
  "Juan tiene " +
    edadJuan +
    ", Sofia tiene " +
    edadSofia +
    ", Lucas tiene " +
    edadLucas +
    ", Hernan tiene " +
    edadHernan +
    " y Maria tiene " +
    edadMaria +
    "."
);

var edades = [edadJuan, edadSofia, edadLucas, edadHernan, edadMaria];

var mayor = Math.max(...edades);

document.write(" Y el mas grande tiene: " + mayor);

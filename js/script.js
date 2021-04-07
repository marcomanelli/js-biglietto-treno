var km = prompt('Quanti kilometri vuoi percorrere?');
var anni = prompt('Quanti anni hai?');

var prezzo = km * 0.21;

if (anni < 18) {
  prezzo = prezzo - ((prezzo * 20)/100);
}else if (anni > 65) {
  prezzo = prezzo - ((prezzo * 40)/100);
}

console.log(prezzo);

document.getElementById('soldi').innerHTML = 'Il biglietto costa: ' + prezzo.toFixed(2);
var ediParser = require('node-boleto').EdiParser,
    fs = require('fs');

var ediFileContent = fs.readFileSync("arquivo.txt").toString();

var parsedFile = ediParser.parse("santander", ediFileContent);
var destination = fs.createWriteStream('./view/boleto.html');
console.log("Boletos pagos: ");
console.log(parsedFile.boletos);


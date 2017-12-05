var http = require('http');
var express = require('express');

var app = express();

var vencVal = (val, obj) => {
    var barra = "81770000000 0 11093659970 2 41131079703 9 00143370831 8";

    //Tratamento para remover tudo que não é numero em meu cod de barras
    barraTrat = barra.replace(/[^\d]+/g, '');
    // console.log(barraTrat);
    var vencimento = barraTrat.slice(20, 44);
    Date.parse(vencimento);
    //captura de valores
    var valor = barraTrat.slice(05, 15); // captura 0000001400

    console.log("Valor do boleto é: R$ " +
        formatReal(valor.replace(/^(0+)(\d)/g, "$2"))); // remove os digitos 0 à esquerda

}

// formatReal converte inteiro para float
function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$,$2");

    return tmp;
}

vencVal((err, val, obj) => {
    if (err) {
        throw err;
    }

});


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // console.log("Rodando")
    // res.end('Hello World!');
}).listen(8080);
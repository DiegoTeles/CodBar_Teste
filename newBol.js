
var vencDate = (val, obj) => {
    var barra = "03399.64041 15400.000129 34567.901029 9 73690000001500";
       
    //Tratamento para remover tudo que não é numero em meu cod de barras
    barraTrat = barra.replace(/[^\d]+/g, '');
    // console.log(barraTrat);
    var vencimento = barraTrat.slice(33, 37);
    //captura de valores
    var valor = barraTrat.slice(38, 53); // captura 0000001400
    //var vencimento = barra.slice(40, 44); // captura 6075 - 34, 38
    var date = new Date('10/07/1997');
    date.setTime(date.getTime() + (vencimento * 24 * 60 * 60 * 1000));

    console.log("Vencimento do boleto em: " +
        ("0" + (date.getDate())).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear());

    console.log("Valor do boleto é: R$ " +
        formatReal(valor.replace(/^(0+)(\d)/g, "$2"))); // remove os digitos 0 à esquerda

}

// formatReal converte inteiro para float
function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
}

vencDate((err, val, obj) => {
if(err){
    throw err;
}

});

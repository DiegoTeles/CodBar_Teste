<h3>GERADOR DE BOLETOS (SANTANDER) E LEITOR DE CÓDIGO DE BARRAS</h1>

Instruções de uso

>>npm install

<h4>Imprimir o Valor e Vencimentos formatados</h4>
   
Onde eu tenho minha váriavel "barra" inserir o codigo de barras

>var barra = "03399.64041 15400.000129 34567.901029 9 73690000001500";

Em seguida rodar no terminal 
>>node newBol 

Para imprimir o Valor e Vencimentos formatados

<h4>Para gerar um boleto</h4>

Rodar no terminal 

>>node src index 

Após gerar esse comando ele imprime o numero do código de barras novo e gera um boleto.html na pasta .\views do projeto

PARA BOLETOS FEBRABAN (CONCESSIONÁRIA)

<p>Alterar codigo de barras na variável barra<p>
>var barra = "81770000000 0 11093659970 2 41131079703 9 00143370831 8";

Em seguida rodar no terminal
>> node febraban

<h3>ESPECIFICAÇÕES DO CODIGO</h3>

>Trata valores do boleto se inserido com pontos, espaços ou algum caractere especial removendo-o,
>Converte valor inteiro de para valor de Reais,
>Realiza calculo de data em dias no padrão do Banco Central usando a data de 10/07/1997 como referancia inicial. http://www.bb.com.br/docs/pub/emp/mpe/dwn/PadraoCodigoBarras.pdf

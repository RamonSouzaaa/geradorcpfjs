# Gerador de CPF

Neste projeto como forma de estudar Javascript decidi fazer um gerador de CPF, para isso primeiramente foi necessário 
entender o que necessário para um CPF ser válido. Por conhecimento geral o CPF (Cadastro de pessoa física) possui o seguinte formato
`XXX.XXX.XXX-XX` sendo os dois últimos dígitos verificadores.

Então, seguindo essa regra primeiro foi necessário entender como os dígitos verificadores são verificados. Pesquisando sobre o 
assunto encontrei que são verificados dessa forma:

Exemplo o CPF com os `9` primeiros dígitos `529.982.247`, para avaliar o primeiro dígito verificador deve-se multiplicar seguindo a ordem descrecente
de `10` até `2`.
```
    5 * 10 = 50
    2 * 9  = 18
    9 * 8  = 72
    9 * 7  = 63
    8 * 6  = 48
    2 * 5  = 10
    2 * 4  = 8
    4 * 3  = 12
    7 * 2  = 14
```
Todos os valores das múltiplicações deve ser amazenados pois será usado posteriormente 
```
50 + 18 + 72 + 63 + 48 + 10 + 8 + 12 + 14 = 295
```
Agora com o somatório basta encontrar o resto da divisão de `295` e `11`, após isso o resultado será subtraído de `11`
```
Mod(295, 11) = 9
11 - 9 = 2
```
Caso o resultado fosse maior ou igual a `10` o digíto verificador será `0`.
Agora para encontrar o seguindo digíto verificado basta aplicar a mesma regra porém 
iniciando a múltiplicação dos digítos por `11`.
```
    5 * 11 = 55
    2 * 10 = 20
    9 * 9  = 81
    9 * 8  = 72
    8 * 7  = 56
    2 * 6  = 12
    2 * 5  = 10
    4 * 4  = 16
    7 * 3  = 21
    2 * 2  = 4
```
Usando a mesmo regra vista anteriormente temos:
```
55 + 20 + 81 + 72 + 56 + 12 + 10 + 16 + 21 + 4 = 347
```
Seguindo para o resto da divisão
```
Mod(347, 11) = 6
11 - 6 = 5
```
E por fim encontramos os dois digítos verificados do CPF `529.982.247-25`

##

![Projeto](https://github.com/RamonSouzaaa/geradorcpfjs/blob/master/img/projeto.PNG)
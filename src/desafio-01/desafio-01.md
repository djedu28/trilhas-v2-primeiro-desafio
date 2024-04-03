# DESAFIO 1. QUESTÃO 1

## Problemática

1. O Supervisor do Sando lhe solicitou que crie um programa que exiba uma mensagem personalizada para todas as pessoas que visitam a empresa. O programa deve solicitar o nome das visitas e imprimir uma mensagem de boas-vindas, da seguinte forma: “Olá, [nome], seja bem-vindo(a) à nossa empresa”. Caso o nome não seja fornecido, imprima a seguinte mensagem: “Desculpe, nenhum nome fornecido!”


## Resolução: Boas-vindas à Empresa

Este é um exemplo simples de um script JavaScript que solicita o nome do visitante e exibe uma mensagem de boas-vindas personalizada. Caso o nome não seja fornecido, uma mensagem de erro é exibida.

> Para revolver esse problema eu utilizaria um form, com input e eventos para exibir em tela o resultado, porem nas aulas da `alura` é ensinado o método simplificado usando `prompt`, `if` e `alert`, e presumo que é isso que os avaliadores do trilhas esperam.

   * abaixo imagem representando o projeto renderizado
   ![imagem representando o projeto](./image.png)

### Estrutura HTML

O arquivo HTML contém um botão que, quando clicado, aciona a função `solicitarNome()` definida no arquivo `script.js`.
Abaixo do botão uma caixa que inicializa vazia e com a inserção do usuário ela é preenchida com a resposta da ultima mensagem para o usuário

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Boas-vindas à Empresa Trilhas Inova</title>
</head>

<body>
    <h1>Boas-vindas à Empresa Trilhas Inova</h1>
    <button onclick="solicitarNome()">Clique aqui para ser bem-vindo(a)</button>
    <h2 id="msg" style="border: 1px solid orange; padding: 20px;"></h2>
    <!-- <script src="script.js"></script> -->
</body>

</html>

```

### Lógica JavaScript

A logica do js está implementada na tag `script` no próprio html, nesta tag script implementei a lógica para solicitar o nome do visitante e exibir a mensagem de boas-vindas personalizada.

```js
<script>
    function solicitarNome() {...}
    function printMsg(text) {...}
</script>
```

#### Função `solicitarNome()`

Esta função utiliza a função `prompt()` para solicitar o nome do visitante. Se o nome for fornecido, a função `printMsg(text)` é usada para exibir a mensagem de boas-vindas personalizada. Caso contrário, uma mensagem de erro é exibida.

```js
    function solicitarNome() {
        // Solicita o nome do visitante
        let nome = prompt("Por favor, digite seu nome:");
        if (nome === null) {
            //break out of the function early
            return; 
        }
        // Verifica se o nome foi fornecido
        if (nome) {
            // Exibe a mensagem de boas-vindas personalizada
            printMsg(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa.`);
        } else {
            // Exibe uma mensagem de erro caso o nome não seja fornecido
            printMsg("Desculpe, nenhum nome fornecido!");
        }
    }
```

#### Função `printMsg(text)`

Fiz essa função para exibir a mensagem  ao usuário utilizando o `alert(text)` e também inserir em tela o texto da mensagem

```js
function printMsg(text){
    // captura o elemento h2 pela id "msg"
    const msg = document.getElementById('msg');
    // substitui o corpo do elemento pelo texto da mensagem
    msg.textContent = text
    // emite um alerta com o texto da menssagem
    alert(text)
}
```

## Resposta completa

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Boas-vindas à Empresa Trilhas Inova</title>
</head>

<body>
    <h1>Boas-vindas à Empresa Trilhas Inova</h1>
    <button onclick="solicitarNome()">Clique aqui para ser bem-vindo(a)</button>
    <h2 id="msg" style="border: 1px solid orange; padding: 20px;"></h2>
    <!-- <script src="script.js"></script> -->
</body>

<script>
    function solicitarNome() {
        // Solicita o nome do visitante
        let nome = prompt("Por favor, digite seu nome:");
        if (nome === null) {
            //break out of the function early
            return; 
        }
        // Verifica se o nome foi fornecido
        if (nome) {
            // Exibe a mensagem de boas-vindas personalizada
            printMsg(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa.`);
        } else {
            // Exibe uma mensagem de erro caso o nome não seja fornecido
            printMsg("Desculpe, nenhum nome fornecido!");
        }
    }
    function printMsg(text) {
        // captura o elemento h2 pela id "msg"
        const msg = document.getElementById('msg');
        // substitui o corpo do elemento pelo texto da mensagem
        msg.textContent = text
        // emite um alerta com o texto da menssagem
        alert(text)
    }
</script>

</html>
```

----
----

## Renderização do projeto abaixo

<iframe 
    style="width: 100%; min-height: 400px" 
    src="./index.html"
></iframe>

----
----

## ‼ Caso não funcione, abaixo tem o codigo injetado no md

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Boas-vindas à Empresa Trilhas Inova</title>
</head>

<body>
    <h1>Boas-vindas à Empresa Trilhas Inova</h1>
    <button onclick="solicitarNome()">Clique aqui para ser bem-vindo(a)</button>
    <h2 id="msg" style="border: 1px solid orange; padding: 20px;"></h2>
    <!-- <script src="script.js"></script> -->
</body>

<script>
    function solicitarNome() {
        // Solicita o nome do visitante
        let nome = prompt("Por favor, digite seu nome:");
        if (nome === null) {
            //break out of the function early
            return; 
        }
        // Verifica se o nome foi fornecido
        if (nome) {
            // Exibe a mensagem de boas-vindas personalizada
            printMsg(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa.`);
        } else {
            // Exibe uma mensagem de erro caso o nome não seja fornecido
            printMsg("Desculpe, nenhum nome fornecido!");
        }
    }
    function printMsg(text) {
        // captura o elemento h2 pela id "msg"
        const msg = document.getElementById('msg');
        // substitui o corpo do elemento pelo texto da mensagem
        msg.textContent = text
        // emite um alerta com o texto da menssagem
        alert(text)
    }
</script>

</html>
# DESAFIO 1. QUESTÃO 4

## Problemática

4. Imagine que o seu irmão esteja aprendendo programação e o professor lhe solicitou um algoritmo que imprima os números de 1 a 10. Como seria a implementação desse algoritmo para que ele possa apresentá-lo ao seu professor?

## Resolução: Impressão de Números de 1 a 10

Para resolver o desafio 4, vamos criar um arquivo HTML simples que, quando carregado, executará um script JavaScript para imprimir os números de 1 a 10 na tela. Isso pode ser feito de várias maneiras, mas uma abordagem simples e direta é usar um loop `for`. Outas abordagens podem usar recursividade, laço `while` ou agendamento de tarefas, ou o mais avançado de código limpo, criar um Array de tamanho 10, e interar sobre ele usando o index+1.

Começamos pelo exemplo simples de um script JavaScript que imprime os números de 1 a 10 na tela quando o documento HTML é carregado.

### Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Impressão de Números de 1 a 10</title>
</head>
<body>
    <h1>Impressão de Números de 1 a 10</h1>
    <p id="resultado"></p>
</body>
<script></script>
</html>
```

### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `imprimirNumeros()` é chamada quando o documento é carregado. Ela usa um loop `for` para gerar uma string com os números de 1 a 10 e, em seguida, exibe essa string no parágrafo com o ID `resultado`.

```javascript
function imprimirNumeros() {
    let string_numeros = "";
    for (let i = 1; i <= 10; i++) {
        string_numeros += i + " ";
    }
    document.getElementById('resultado').textContent = string_numeros;
}

// Chama a função assim que o documento é carregado
document.addEventListener('DOMContentLoaded', imprimirNumeros);
```

### Resolução da problemática

A solução completa inclui o HTML, CSS e JavaScript necessários para implementar o programa. Quando o documento HTML é carregado, o script JavaScript executa a função `imprimirNumeros()`, que imprime os números de 1 a 10 na tela.

```html

```

### Renderização da solução simplificada

Para visualizar em tela cheia clique aqui: [./index-simples.html](./index-simples.html)

<iframe
    style="width: 100%; min-height: 300px; border-radius: 25px; border: 2px dashed black;"
    src="./index-simples.html"
></iframe>

## O Resultado final

* utilizei a lógica de criar um gerador de range, utilizar setTimeout para chamar a função recursivamente a cada 500 milissegundos (para dar tempo de vermos que está sendo contado)
* Adicionei input de inicio, fim e passo
* a lógica funciona para range com o fim menor que o inicio, com passo negativo
* Com a variável global gerador mantemos acessível o gerador para todas as interações
* com a variável global acumulador, salvamos os números exibidos anteriormente e exibimos eles em tela

```js
var gerador;
var acumulador = []

function* range(inicio, fim, passo = 1) {
    let current = inicio
    
    while (inicio < fim ? current < fim : current > fim){
        yield current
        current += passo
        console.log(current)
    }
    return fim
}

function imprimirProximoNumero() {
    // for (const value of range(0, 5)) 
    var numero_gerado = gerador.next()
    acumulador.push(numero_gerado.value)
    document.getElementById('resultado').textContent = numero_gerado.value;
    document.getElementById('acumulador').textContent = acumulador.toString();
    
    if (!numero_gerado.done) {
        // reiniciar a função com recursividade depois de 500 ms
        setTimeout(imprimirProximoNumero, 500);
    }
}

function IniciarContagem(){
    const valor_x = parseInt(document.getElementById('x').value)
    const valor_y = parseInt(document.getElementById('y').value)
    const passo   = parseInt(document.getElementById('passo').value)

    gerador = range(valor_x, valor_y, passo)

    setTimeout(function () {
        // código a ser executado após 500 milessegundos
        imprimirProximoNumero()
    }, 500);
}

```

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Impressão de Números de 1 a 10</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input {
            text-align: center;
        }
        .input-container {
            display: flex; 
            gap: 21px;
            justify-content: space-evenly;
        }
    </style>
</head>
<body>
    <div class="terminal-alert terminal-alert-primary">
        <legend>DESAFIO 1 - PROBLEMÁTICA 4</legend>
        <p>
            4. Imagine que o seu irmão esteja aprendendo programação e o professor lhe solicitou um algoritmo que imprima os números
            de 1 a 10. Como seria a implementação desse algoritmo para que ele possa apresentá-lo ao seu professor?
        </p>
    </div>
    <h1>Impressão de Números de X=1 a y=10</h1>
    <fieldset>
        <legend>Se quiser, ajuste os valores de X e Y</legend>
        <div class="input-container">
            <div class="form-group">
                <label for="x">X</label>
                <input type="number" id="x" value="0" required>
            </div>
            <div class="form-group">
                <label for="y">Y</label>
                <input type="number" id="y" value="10" required>
            </div>
            <div class="form-group">
                <label for="passo">Passo</label>
                <input type="number" id="passo" value="1" required>
            </div>
        </div>
        <button class="btn btn-primary btn-block" onclick="IniciarContagem()">Iniciar contagem</button>
    </fieldset>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="font-size: xx-large; padding: 2rem 3rem;">
                aqui será inserido a contagem...
            </div>
            <div id="acumulador" style="padding:2rem"> </div>
        </div>
    </section>
</body>
<script>
   ...
</script>

</html>
```

### e em iframe para testar a solução final

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 800px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>
# DESAFIO 1. QUESTÃO 10

## Problemática

10. A Alura pretende aumentar o salário dos seus colaboradores e, para isso, propus a você a criação de um algoritmo que acrescente:
·         10%, se o salário for menor ou igual a R$ 2000;
·         5%, se for maior a R$ 5000 e menor que R$ 10000;
·         2%, se for maior  que R$10000 e menor que R$15000.
Após a operação, o algoritmo deve imprimir na tela o valor original antes do aumento e o valor com aumento.

## Resolução

### Resolução da problemática

Para resolver o desafio 10, vamos criar um script JavaScript que solicita ao usuário o salário atual de um colaborador e, com base nas regras estabelecidas, calcula o novo salário após o aumento. A solução será baseada na lógica de programação já utilizada em desafios anteriores, com algumas adaptações para atender às especificações deste novo desafio.

#### Estrutura HTML

Vamos criar uma interface simples com um campo de entrada para o salário atual e um botão para acionar o cálculo. O resultado será exibido em um parágrafo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cálculo de Aumento Salarial</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
    </style>
</head>
<body>
    <h1>Cálculo de Aumento Salarial</h1>
    <p>Por favor, informe o salário atual:</p>
    <label for="salarioAtual">salário atual:</label>
    <input type="number" id="salarioAtual" required>
    <button class="btn btn-primary btn-block" onclick="calcularAumento()">Calcular Aumento</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem 3rem;">
                Aqui será exibido o valor original e o valor com aumento
            </div>
        </div>
    </section>
</body>
<script>
</script>
</html>
```

#### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `calcularAumento()` é chamada quando o usuário clica no botão. Ela pega o salário atual fornecido pelo usuário e, com base nas regras estabelecidas, calcula o novo salário após o aumento. O resultado é exibido no parágrafo com o ID `resultado`.

```javascript
function calcularAumento() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    const resultadoContainer = document.getElementById('resultado');

    let novoSalario = salarioAtual;
    if (salarioAtual <= 2000) {
        novoSalario += salarioAtual * 0.10;
    } else if (salarioAtual > 5000 && salarioAtual < 10000) {
        novoSalario += salarioAtual * 0.05;
    } else if (salarioAtual >= 10000 && salarioAtual < 15000) {
        novoSalario += salarioAtual * 0.02;
    }

    resultadoContainer.textContent = `Salário original: R$ ${salarioAtual.toFixed(2)}, Salário com aumento: R$ ${novoSalario.toFixed(2)}`;
}
```

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.

### Renderização da solução simplificada

Para visualizar em tela cheia clique aqui: [./index-simples.html](./index-simples.html)

<iframe
    style="width: 100%; min-height: 300px; border-radius: 25px; border: 2px dashed black;"
    src="./index-simples.html"
></iframe>

## Melhorando a lógica

Para melhorar essa resolução sem perder a simplicidade,

* add função de print, para separa a lógica de calculo da lógica de Saida da informação, a função print recebe parâmetros dinamicamente e trabalha com eles exibindo cada parâmetros em um paragrafo diferente do resultado;
* no `print()` usado `array.map` e `array.join` para unir as mensagens, pois já usamos reduce em desafios anteriores
* add validação de não numero
* adicionado justificativa, para justificar o aumento ou não do salario
* Como para quem tem o salario maior que 2000 e menor ou igual a 5000 não terá aumento, foi necessário adicionar a justificativa para o funcionário saber o motivo de não ter o aumento

```js
function print(...array_msgs){
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = array_msgs.map(texto => `<p>${texto}</p>`).join("");
}
function calcularAumento() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);

    if (Number.isNaN(salarioAtual)) {
        resultadoContainer.textContent = `Salario não valido`;
        return;
    }
    let justificativa = "Justificativa: "
    let novoSalario = salarioAtual;
    if (salarioAtual <= 2000) {
        novoSalario += salarioAtual * 0.10;
        justificativa += "Acrescentado 10%, pois o salário é menor ou igual a R$ 2000;"
    } else if (salarioAtual > 5000 && salarioAtual < 10000) {
        novoSalario += salarioAtual * 0.05;
        justificativa += "Acrescentado 5%, pois o salario é maior a R$ 5000 e menor que R$ 10000;"
    } else if (salarioAtual >= 10000 && salarioAtual < 15000) {
        novoSalario += salarioAtual * 0.02;
        justificativa += "Acrescentado 2%, pois o salário é maior que R$10000 e menor que R$15000;"
    } else {
        justificativa = "Infelizmente o salario não atendeu os critérios, não terá aumento"
    }
    
    print(
        `Salário original: R$ ${salarioAtual.toLocaleString()}`,
        `Salário com aumento: R$ ${novoSalario.toLocaleString()}`,
        justificativa
    )
    
}
```

## O Resultado final

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cálculo de Aumento Salarial</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input {
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Cálculo de Aumento Salarial</h1>
    <p>Por favor, informe o salário atual:</p>
    <input type="number" id="salarioAtual" required step="0.01">
    <button class="btn btn-primary btn-block" onclick="calcularAumento()">Calcular Aumento</button>
    <ul>
        Algoritmo que acrescente:
        <li>10%, se o salário for menor ou igual a R$ 2000;</li>
        <li>5%, se for maior a R$ 5000 e menor que R$ 10000;</li>
        <li>2%, se for maior que R$10000 e menor que R$15000.</li>
    </ul>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem 3rem;">
                Aqui será exibido o valor original e o valor com aumento
            </div>
        </div>
    </section>
    <script>
        function print(...array_msgs){
            const resultadoContainer = document.getElementById('resultado');
            resultadoContainer.innerHTML = array_msgs.map(texto => `<p>${texto}</p>`).join("");
        }
        function calcularAumento() {
            const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);

            if (Number.isNaN(salarioAtual)) {
                resultadoContainer.textContent = `Salario não valido`;
                return;
            }
            let justificativa = "Justificativa: "
            let novoSalario = salarioAtual;
            if (salarioAtual <= 2000) {
                novoSalario += salarioAtual * 0.10;
                justificativa += "Acrescentado 10%, pois o salário é menor ou igual a R$ 2000;"
            } else if (salarioAtual > 5000 && salarioAtual < 10000) {
                novoSalario += salarioAtual * 0.05;
                justificativa += "Acrescentado 5%, pois o salario é maior a R$ 5000 e menor que R$ 10000;"
            } else if (salarioAtual >= 10000 && salarioAtual < 15000) {
                novoSalario += salarioAtual * 0.02;
                justificativa += "Acrescentado 2%, pois o salário é maior que R$10000 e menor que R$15000;"
            } else {
                justificativa = "Infelizmente o salario não atendeu os critérios, não terá aumento"
            }
            
            print(
                `Salário original: R$ ${salarioAtual.toLocaleString()}`,
                `Salário com aumento: R$ ${novoSalario.toLocaleString()}`,
                justificativa
            )
            
        }
    </script>
</body>

</html>
```

### e em iframe para testar a solução final

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 800px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>

# DESAFIO 1. QUESTÃO 7

## Problemática

7. Escreva um programa que solicita dois números e verifica se o primeiro número é divisível por segundo. Assim sendo, é esperada na saída a impressão da seguinte frase: “O primeiro número é divisível por segundo” Caso contrário, o programa deve exibir “O primeiro número não é divisível pelo segundo” .

### Resolução da problemática:

Para resolver o desafio 7, vamos criar um script JavaScript que solicita dois números ao usuário e verifica se o primeiro número é divisível pelo segundo. A solução será baseada na lógica de programação já utilizada em desafios anteriores, com algumas adaptações para atender às especificações deste novo desafio.

#### Estrutura HTML

Vamos criar uma interface simples com dois campos de entrada para os números e um botão para acionar a verificação. O resultado será exibido em um parágrafo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Verificação de Divisibilidade</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
        .input-container {
            display: flex; 
            gap: 21px;
            justify-content: space-evenly;
        }
    </style>
</head>
<body>
    <h1>Verificação de Divisibilidade</h1>
    <fieldset>
        <div class="input-container">
            <div class="form-group">
                <label for="numero1">Primeiro Número</label>
                <input type="number" id="numero1" required>
            </div>
            <div style="font-size: xx-large;">
                ÷
            </div>
            <div class="form-group">
                <label for="numero2">Segundo Número</label>
                <input type="number" id="numero2" required>
            </div>
        </div>
        <button 
            class="btn btn-primary btn-block" 
            onclick="verificarDivisibilidade()"
        >
            Verificar Divisibilidade
        </button>
    </fieldset>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem 3rem;">
                Aqui será exibido o resultado da verificação de divisibilidade
            </div>
        </div>
    </section>
    <script>
        ...
    </script>
</body>
</html>
```

#### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `verificarDivisibilidade()` é chamada quando o usuário clica no botão. Ela verifica se o segundo número é zero (caso em que a divisão não é possível) e, em seguida, usa o operador de módulo (`%`) para determinar se o primeiro número é divisível pelo segundo. O resultado é exibido no parágrafo com o ID `resultado`.

```javascript
function verificarDivisibilidade() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultadoContainer = document.getElementById('resultado');

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        resultado_container.textContent = `Valor inválido`;
        return;
    }
    if (numero2 === 0) {
        resultadoContainer.textContent = `Valor inválido: o segundo número não pode ser zero.`;
        return;
    }

    if (numero1 % numero2 === 0) {
        resultadoContainer.textContent = `O primeiro número é divisível pelo segundo.`;
    } else {
        resultadoContainer.textContent = `O primeiro número não é divisível pelo segundo. (o resto da divisão é diferente de zero).`;
    }
    resultadoContainer.textContent += ` \n Resultado da divisão: ${numero1/numero2}`;
}
```

## Resultado final:

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Verificação de Divisibilidade</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
        .input-container {
            display: flex; 
            gap: 21px;
            justify-content: space-evenly;
        }
    </style>
</head>
<body>
    <h1>Verificação de Divisibilidade</h1>
    <fieldset>
        <div class="input-container">
            <div class="form-group">
                <label for="numero1">Primeiro Número</label>
                <input type="number" id="numero1" required>
            </div>
            <div style="font-size: xx-large;">
                ÷
            </div>
            <div class="form-group">
                <label for="numero2">Segundo Número</label>
                <input type="number" id="numero2" required>
            </div>
        </div>
        <button 
            class="btn btn-primary btn-block" 
            onclick="verificarDivisibilidade()"
        >
            Verificar Divisibilidade
        </button>
    </fieldset>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem 3rem;">
                Aqui será exibido o resultado da verificação de divisibilidade
            </div>
        </div>
    </section>
    <script>
        function verificarDivisibilidade() {
            const numero1 = parseFloat(document.getElementById('numero1').value);
            const numero2 = parseFloat(document.getElementById('numero2').value);
            const resultadoContainer = document.getElementById('resultado');
            
            if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
                resultado_container.textContent = `Valor inválido`;
                return;
            }
            if (numero2 === 0) {
                resultadoContainer.textContent = `Valor inválido: o segundo número não pode ser zero.`;
                return;
            }

            if (numero1 % numero2 === 0) {
                resultadoContainer.textContent = `O primeiro número é divisível pelo segundo.`;
            } else {
                resultadoContainer.textContent = `O primeiro número não é divisível pelo segundo. (o resto da divisão é diferente de zero).`;
            }
            resultadoContainer.textContent += ` \n Resultado da divisão: ${numero1/numero2}`;
        }
    </script>
</body>
</html>
```

### e em iframe para testar a solução

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 800px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>

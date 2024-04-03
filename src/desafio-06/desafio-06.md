# DESAFIO 1. QUESTÃO 6

## Problemática

6. O Daniel está aprendendo a programar com seu pai, que é engenheiro de software. Um dia, seu pai pediu que ele criasse um programa simples: receber dois números do usuário e retornar o resultado da multiplicação deles. Para ajudar o Daniel, como seria a implementação desse algoritmo?

## Resolução da problemática:

* já utilizamos anteriormente input de formulário, capturamos os valores deles utilizando getElementById
* Não tem nenhuma novidade nesta resolução, além do operador de multiplicação do js que é o `*`
* Dito isso, irei fazer diretamente a versão final, comentarios estarão no codigo, a base da interface foi apresentada no [desafio 4](/src/desafio-04/desafio-04.md)

## O Resultado final

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Calcular multiplicação de dois números</title>
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
        <legend>DESAFIO 1 - PROBLEMÁTICA 6</legend>
        <p>
            6. O Daniel está aprendendo a programar com seu pai, que é engenheiro de software. Um dia, seu pai pediu que ele criasse
            um programa simples: receber dois números do usuário e retornar o resultado da multiplicação deles. Para ajudar o
            Daniel, como seria a implementação desse algoritmo?
        </p>
    </div>
    <h1>Calcular multiplicação de dois números</h1>
    <fieldset>
        <div class="input-container">
            <div class="form-group">
                <label for="valor_a">A</label>
                <input type="number" id="valor_a" required>
            </div>
            <div style="font-size: xx-large;">
                ✖
            </div>
            <div class="form-group">
                <label for="valor_b">B</label>
                <input type="number" id="valor_b" required>
            </div>
        </div>
        <button class="btn btn-primary btn-block" onclick="calcular()">Calcular multiplicação de A vezes B</button>
    </fieldset>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="font-size: xx-large; padding: 2rem 3rem;">
                aqui será exibido o resultado da multiplicação
            </div>
        </div>
    </section>
</body>
<script>
    function calcular(){
        // coletando valores da de A e B
        const valor_a = parseFloat(document.getElementById('valor_a').value);
        const valor_b = parseFloat(document.getElementById('valor_b').value);
        // capturando o container para exibir o resultado
        const resultado_container = document.getElementById('resultado')
        // validando se tem algum input errado
        if (Number.isNaN(valor_a) || Number.isNaN(valor_b)){
            resultado_container.textContent = `Valor inválido`;
            return;
        }
        // calculando e exibindo o resultado
        resultado_container.textContent = `🖩 ${valor_a} ✖ ${valor_b} = ${valor_a * valor_b} `
    }
</script>

</html>
```

### e em iframe para testar a solução final

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 800px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>

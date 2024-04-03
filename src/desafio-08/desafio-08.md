# DESAFIO 1. QUESTÃO 8

## Problemática

8. Um contador pretende automatizar a folha salarial dos seus funcionários para economizar mais tempo. Para isso, solicitou a você um um programa que some todos os salários em uma lista. Logo, implemente um algoritmo que receba do contador uma lista de salários e calcule a soma deles. Posteriormente ao cálculo, o algoritmo deve imprimir o salário total da folha de pagamento.

## Resolução

### Resolução da problemática

Para resolver a problemática 8, vamos criar um script JavaScript que solicita ao usuário uma lista de salários e calcula a soma total desses salários. A solução será baseada na lógica de programação já utilizada em desafios anteriores, com algumas adaptações para atender às especificações deste novo desafio.

#### Estrutura HTML

Vamos criar uma interface simples com um campo de entrada para a lista de salários e um botão para acionar o cálculo. O resultado será exibido em um parágrafo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cálculo de Salário Total</title>
    <link rel="stylesheet" href="/common/css/style.css" />
</head>
<body>
    <h1>Cálculo de Salário Total</h1>
    <p>Por favor, informe os salários separados por vírgula:</p>
    <input type="text" id="salarios" required placeholder="10, 7, 20, -30">
    <button class="btn btn-primary btn-block" onclick="calcularSalarioTotal()">Calcular Salário Total</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding:2rem">
                Aqui será exibido o salário total da folha de pagamento
            </div>
        </div>
    </section>
    <script> </script>
</body>
</html>
```

#### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `calcularSalarioTotal()` é chamada quando o usuário clica no botão. Ela pega a string de salários, divide-a em um array de strings, converte cada string em um número e, em seguida, usa o método `reduce` para somar todos os salários. O resultado é exibido no parágrafo com o ID `resultado`.

```javascript
function calcularSalarioTotal() {
    const salariosString = document.getElementById('salarios').value;
    const salarios = salariosString.split(',').map(salario => parseFloat(salario.trim()));
    const resultadoContainer = document.getElementById('resultado');

    const salarioTotal = salarios.reduce((total, salario) => total + salario, 0);

    resultadoContainer.textContent = `O salário total da folha de pagamento é: ${salarioTotal.toFixed(2)}`;
}
```

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.

### Renderização da solução simplificada

Para visualizar em tela cheia clique aqui: [./index-simples.html](./index-simples.html)

<iframe
    style="width: 100%; min-height: 700px; border-radius: 25px; border: 2px dashed black;"
    src="./index-simples.html"
></iframe>

## Melhorando a lógica

Para melhorar essa resolução sem perder a simplicidade,

* Aviso para o separador de casas decimais ser o ponto (.)


```diff
 <h1>Cálculo de Salário Total</h1>
- <p>Por favor, informe os salários separados por vírgula:</p>
+ <p>Por favor, informe os salários separados por vírgula e utilizando ponto (.) como separador de cacas decimais:</p>
 <input type="text" id="salarios" required placeholder="10, 7, 20, -30">

```

* coloquei validação para se o input estiver errado
* ativei a cor de erro no card quando é exibido uma mensagem de erro
* adicionei memorial de calculo

```js
    function calcularSalarioTotal() {
        const salariosString = document.getElementById('salarios').value;
        const salarios = salariosString.split(',').map(salario => parseFloat(salario.trim()));
        const resultadoContainer = document.getElementById('resultado');

        const salarioTotal = salarios.reduce((total, salario) => total + salario, 0);

        if (Number.isNaN(salarioTotal)){
            resultadoContainer.classList = ["btn-error"]
            resultadoContainer.innerHTML = `
                <p>Erro, favor informe somente números, separados por virgula.</p>
                <p>É aceito sinal de negativo "-"</p>
                <p>Exemplo: 10, 7, 20, -30</p>
            `;
            return;
        }
        const salario_em_brl = "R$ "+salarioTotal.toFixed(2).replace(".", ",")
        resultadoContainer.classList = []
        resultadoContainer.innerHTML  = `<p> O salário total da folha de pagamento é: <b>${salario_em_brl}</b></p>`;
        resultadoContainer.innerHTML += `<p> Calculo: ${salarios.join(" + ")} = ${salario_em_brl} </p>`;
    }
```

## O Resultado final

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cálculo de Salário Total</title>
    <link rel="stylesheet" href="/common/css/style.css" />
</head>

<body>
    <h1>Cálculo de Salário Total</h1>
    <p>Por favor, informe os salários separados por vírgula e utilizando ponto (.) como separador de cacas decimais:</p>
    <input type="text" id="salarios" required placeholder="10, 7, 20, -30">
    <button class="btn btn-primary btn-block" onclick="calcularSalarioTotal()">Calcular Salário Total</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding:2rem">
                Aqui será exibido o salário total da folha de pagamento
            </div>
        </div>
    </section>
    <script>
        function calcularSalarioTotal() {
            const salariosString = document.getElementById('salarios').value;
            const salarios = salariosString.split(',').map(salario => parseFloat(salario.trim()));
            const resultadoContainer = document.getElementById('resultado');

            const salarioTotal = salarios.reduce((total, salario) => total + salario, 0);

            if (Number.isNaN(salarioTotal)){
                resultadoContainer.classList = ["btn-error"]
                resultadoContainer.innerHTML = `
                    <p>Erro, favor informe somente números, separados por virgula.</p>
                    <p>É aceito sinal de negativo "-"</p>
                    <p>Exemplo: 10, 7, 20, -30</p>
                `;
                return;
            }
            const salario_em_brl = "R$ "+salarioTotal.toFixed(2).replace(".", ",")
            resultadoContainer.classList = []
            resultadoContainer.innerHTML  = `<p> O salário total da folha de pagamento é: <b>${salario_em_brl}</b></p>`;
            resultadoContainer.innerHTML += `<p> Calculo: ${salarios.join(" + ")} = ${salario_em_brl} </p>`;
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

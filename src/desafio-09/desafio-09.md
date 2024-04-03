# DESAFIO 1. QUESTÃO 9

## Problemática

9. A Clara criou um formulário para recolher as informações pessoais de seu cliente e deseja que a idade apareça na tela assim ele informe o ano de nascimento. Então, ela o solicitou a elaboração de um algoritmo que retorne a idade da pessoa, baseada no ano de nascimento fornecido. Crie um algoritmo que execute essa tarefa.

## Resolução

### Resolução da problemática

Para resolver o desafio 9, vamos criar um script JavaScript que solicita ao usuário o ano de nascimento e calcula a idade da pessoa com base no ano atual. A solução será baseada na lógica de programação já utilizada em desafios anteriores, com algumas adaptações para atender às especificações deste novo desafio.

#### Estrutura HTML

Vamos criar uma interface simples com um campo de entrada para o ano de nascimento e um botão para acionar o cálculo. O resultado será exibido em um parágrafo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cálculo de Idade</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
    </style>
</head>
<body>
    <h1>Cálculo de Idade</h1>
    <p>Por favor, informe o ano de nascimento:</p>
    <input type="number" id="anoNascimento" required>
    <button class="btn btn-primary btn-block" onclick="calcularIdade()">Calcular Idade</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem">
                Aqui será exibida a idade da pessoa
            </div>
        </div>
    </section>
</body>
<script> </script>
</html>
```

#### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `calcularIdade()` é chamada quando o usuário clica no botão. Ela pega o ano de nascimento fornecido pelo usuário, calcula o ano atual usando o objeto `Date` do JavaScript e, em seguida, subtrai o ano de nascimento do ano atual para obter a idade. O resultado é exibido no parágrafo com o ID `resultado`.

```javascript
function calcularIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultadoContainer = document.getElementById('resultado');

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    resultadoContainer.textContent = `A idade da pessoa é: ${idade} anos`;
}
```

### Solução simplificada completa

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cálculo de Idade</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
    </style>
</head>
<body>
    <h1>Cálculo de Idade</h1>
    <p>Por favor, informe o ano de nascimento:</p>
    <input type="number" id="anoNascimento" required>
    <button class="btn btn-primary btn-block" onclick="calcularIdade()">Calcular Idade</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem">
                Aqui será exibida a idade da pessoa
            </div>
        </div>
    </section>
</body>
<script>
    function calcularIdade() {
        const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
        const resultadoContainer = document.getElementById('resultado');

        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNascimento;

        resultadoContainer.textContent = `A idade da pessoa é: ${idade} anos`;
    }
</script>
</html>
```

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.

### Renderização da solução simplificada

Para visualizar em tela cheia clique aqui: [./index-simples.html](./index-simples.html)

<iframe
    style="width: 100%; min-height: 650px; border-radius: 25px; border: 2px dashed black;"
    src="./index-simples.html"
></iframe>

## Melhorando a lógica

Para melhorar essa resolução sem perder a simplicidade,

* adicionado evento onInput para recalcular automaticamente quando o ano possui 3 dígitos ou mais
* adicionado validação
* exibindo erros de idade invalida, ano no futuro

```js
    function calcularIdade() {
        const anoNascimento = document.getElementById('anoNascimento').value;
        const resultadoContainer = document.getElementById('resultado');

        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - parseInt(anoNascimento);

        if (Number.isNaN(idade)) {
            resultadoContainer.textContent = `Verifique o ano de nascimento, ele precisa ser um numero`;
            return;
        }
        if (anoNascimento.length <= 3) {
            resultadoContainer.textContent = `Aqui será exibida a idade da pessoa, quando inserir um ano realista`
            return;
        }
        if (idade < 0) {
            resultadoContainer.textContent = `Verifique o ano de nascimento, ele não pode ser no futuro`;
            return;
        }

        resultadoContainer.textContent = `A idade da pessoa é: ${idade} anos e alguns meses`;
    }  
```

## O Resultado final

```html

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cálculo de Idade</title>
    <link rel="stylesheet" href="/common/css/style.css" />
    <style>
        input { text-align: center; }
    </style>
</head>

<body>
    <h1>Cálculo de Idade</h1>
    <p>Por favor, informe o ano de nascimento:</p>
    <div class="form-group">
        <label for="anoNascimento">Qual o ano do seu nascimento?</label>
        <input type="number" id="anoNascimento" required placeholder="1998" oninput="calcularIdade()">
    </div>
    <button class="btn btn-primary btn-block" onclick="calcularIdade()">Calcular Idade</button>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" style="padding: 2rem">
                Aqui será exibida a idade da pessoa
            </div>
        </div>
    </section>
</body>
<script>
    function calcularIdade() {
        const anoNascimento = document.getElementById('anoNascimento').value;
        const resultadoContainer = document.getElementById('resultado');

        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - parseInt(anoNascimento);

        if (Number.isNaN(idade)) {
            resultadoContainer.textContent = `Verifique o ano de nascimento, ele precisa ser um numero`;
            return;
        }
        if (anoNascimento.length <= 3) {
            resultadoContainer.textContent = `Aqui será exibida a idade da pessoa, quando inserir um ano realista`
            return;
        }
        if (idade < 0) {
            resultadoContainer.textContent = `Verifique o ano de nascimento, ele não pode ser no futuro`;
            return;
        }

        resultadoContainer.textContent = `A idade da pessoa é: ${idade} anos e alguns meses`;
    }
</script>

</html>
```

### e em iframe para testar a solução final

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 700px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>

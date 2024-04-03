
# DESAFIO 1. QUESTÃO 3

## Problemática

3. A professora Sandra pretende automatizar o resultado da nota de um aluno de ensino médio e solicitou-lhe que crie um programa que receba três notas finais e que apareça para ela “Aprovado”, se a média estiver entre 7 e 10. Caso a média for menor que 7 e maior ou igual a 0, o programa deve imprimir na tela “Reprovado”.

## Resolução: Verificação de Nota do Aluno

Este é um exemplo simples de um script JavaScript que solicita as três notas finais de um aluno e exibe uma mensagem de aprovação ou reprovação com base na média das notas.

### Estrutura HTML

O arquivo HTML contém três campos de entrada para as notas finais do aluno, um botão para acionar a verificação da nota e um parágrafo para exibir o resultado.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Verificação de Nota do Aluno</title>
    <link rel="stylesheet" href="/common/css/style.css" />
</head>
<body>
    <h1>Verificação de Nota do Aluno</h1>
    <p>Por favor, informe as três notas finais:</p>
    <input type="number" id="nota1" min="0" max="10">
    <input type="number" id="nota2" min="0" max="10">
    <input type="number" id="nota3" min="0" max="10">
    <button onclick="verificarNota()">Verificar Nota</button>
    <p id="resultado"></p>
</body>
<script></script>
</html>
```

### Lógica JavaScript

A lógica do JavaScript está implementada na tag `script` no próprio HTML. A função `verificarNota()` é chamada quando o usuário clicar no botão. Ela calcula e valida a média das notas fornecidas e exibe a mensagem de aprovação ou reprovação apropriada. Caso uma das tres notas tenha valor errado, o efeito colateral na media é verificado.

```javascript
function verificarNota() {
        // coletando valores das notas
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const nota3 = parseFloat(document.getElementById('nota3').value);
        // capturando elemento para saida das informações
        const resultado = document.getElementById('resultado');
        // calculando a media das notas
        const media = (nota1 + nota2 + nota3) / 3;
        // validando a media das notas
        if (media >= 7 && media <= 10) {
            resultado.textContent = "Aprovado";
        } else if (media >= 0 && media < 7) {
            resultado.textContent = "Reprovado";
        } else {
            resultado.textContent = "Nota inválida";
        }
    }
```

### Resposta completa

A solução completa inclui o HTML, CSS e JavaScript necessários para implementar o programa. O usuário pode inserir as três notas finais e, ao clicar no botão, o programa determinará se o aluno está "Aprovado" ou "Reprovado", exibindo a mensagem apropriada. Caso uma das tres notas tenha valor errado, o efeito colateral na media é verificado.

Essa solução é simples e direta, utilizando HTML para a estrutura, CSS para estilização e JavaScript para a lógica de programação.
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Verificação de Nota do Aluno</title>
    <link rel="stylesheet" href="/common/css/style.css" />
</head>

<body>
    <h1>Verificação de Nota do Aluno</h1>
    <p>Por favor, informe as três notas finais:</p>
    <input type="number" id="nota1" min="0" max="10">
    <input type="number" id="nota2" min="0" max="10">
    <input type="number" id="nota3" min="0" max="10">
    <button onclick="verificarNota()">Verificar Nota</button>
    <p id="resultado"></p>
</body>
<script>
    function verificarNota() {
        // coletando valores das notas
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const nota3 = parseFloat(document.getElementById('nota3').value);
        // capturando elemento para saida das informações
        const resultado = document.getElementById('resultado');
        // calculando a media das notas
        const media = (nota1 + nota2 + nota3) / 3;
        // validando a media das notas
        if (media >= 7 && media <= 10) {
            resultado.textContent = "Aprovado";
        } else if (media >= 0 && media < 7) {
            resultado.textContent = "Reprovado";
        } else {
            resultado.textContent = "Nota inválida";
        }
    }
</script>
</html>
```

### Renderização da solução simplificada

Para visualizar em tela cheia clique aqui: [./index-simples.html](./index-simples.html)

<iframe
    style="width: 100%; min-height: 300px; border-radius: 25px; border: 2px dashed black;"
    src="./index-simples.html"
></iframe>


## Melhorias

* adicionando a problemática como um terminal-alert no topo do html
* separando em seções o input do output
* adicionando label aos inputs e agrupando eles horizontalmente
* adicionando a resposta em um card do terminal css
* Colorindo o card de vermelho caso reprovado, e de azul caso aprovado
* validando cada nota usando `Array.every`, verificando se `nota>=0 && nota<=10` nota é maior  ou igual a zero e menor ou igual a 10

### Código da melhoria

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Verificação de Nota do Aluno</title>
    <link rel="stylesheet" href="/common/css/style.css" />
</head>

<body>
    <div class="terminal-alert terminal-alert-primary">
        <legend>DESAFIO 1 - PROBLEMÁTICA 3</legend>
        <p>
            A professora Sandra pretende automatizar o resultado da nota de um aluno de ensino médio e solicitou-lhe que crie um
            programa que receba três notas finais e que apareça para ela “Aprovado”, se a média estiver entre 7 e 10. Caso a média
            for menor que 7 e maior ou igual a 0, o programa deve imprimir na tela “Reprovado”.
        </p>
    </div>
    <h1>Verificação de Nota do Aluno</h1>
    <fieldset>
        <legend>Por favor, informe as três notas finais:</legend>
        <div style="display: flex; gap: 21px;justify-content: space-between;">
            <div class="form-group">
                <label for="nota1">Nota1</label>
                <input type="number" id="nota1" min="0" max="10" required>
            </div>
            <div class="form-group">
                <label for="nota2">Nota2</label>
                <input type="number" id="nota2" min="0" max="10" required>
            </div>
            <div class="form-group">
                <label for="nota3">Nota3</label>
                <input type="number" id="nota3" min="0" max="10" required>
            </div>
        </div>
        <button class="btn btn-primary btn-block" onclick="verificarNota()">Verificar Nota</button>
    </fieldset>
    <section>
        <div class="terminal-card" id="card">
            <header>Resultado</header>
            <div id="resultado" class="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas
                ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
                incidunt. Eaque quod et, aut maiores excepturi sint.
            </div>
        </div>
    </section>
</body>
<script>
    function verificarNota() {
        // coletando valores das notas
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const nota3 = parseFloat(document.getElementById('nota3').value);
        // capturando elemento para saida das informações
        const resultado = document.getElementById('resultado');
        // calculando a media das notas
        const media = (nota1 + nota2 + nota3) / 3;
        // validando a media das notas
        if (![nota1, nota2, nota3].every(nota=> nota>=0 && nota<=10)){
            resultado.textContent = "Nota inválida";
        } else if (media >= 7 && media <= 10) {
            resultado.textContent = "Aprovado";
            resultado.classList = ["terminal-alert-primary"];
        } else if (media >= 0 && media < 7) {
            resultado.textContent = "Reprovado";
            resultado.classList = ["terminal-alert-error"];
        }
    }
</script>

</html>
```

### renderização da versão final

Para visualizar em tela cheia clique aqui: [./index.html](./index.html)

<iframe
    style="width: 100%; min-height: 800px; border-radius: 25px; border: 2px dashed black;"
    src="./index.html"
></iframe>
let conteudo_navbar = `
<div class="container">
    <div class="terminal-nav">
        <header class="terminal-logo">
            <div class="logo terminal-prompt"><a href="/" class="no-style">Desafio 1 TrilhasV2 por @DjEdu28</a></div>
        </header>
        <nav class="terminal-menu">
            <ul vocab="https://schema.org/" typeof="BreadcrumbList">
                <li><a href="/README.html" class="menu-item"><span>Inicio</span></a>
                    <meta property="position">
                </li>
                <li property="itemListElement" typeof="ListItem"><a href="/mapa_links.html" property="item" typeof="WebPage"
                        class="menu-item"><span property="name">Mapa de links</span></a>
                    <meta property="position" content="1">
                </li>
                <li property="itemListElement" typeof="ListItem"><a href="https://github.com/djedu28/trilhas-v2-primeiro-desafio" property="item" typeof="WebPage"
                        class="menu-item"><span property="name">Repositório no Github</span></a>
                    <meta property="position" content="2">
                </li>
                <li property="itemListElement" typeof="ListItem"><a href="https://github.com/djedu28" property="item"
                        typeof="WebPage" class="menu-item"><span property="name">Github do criador</span></a>
                    <meta property="position" content="3">
                </li>
                <li property="itemListElement" typeof="ListItem"><a href="https://trilhas-v2-desafio-1.vercel.app/README.html" property="item"
                        typeof="WebPage" class="menu-item"><span property="name">Site publicado</span></a>
                    <meta property="position" content="4">
                </li>
                <li style="height: 28px;"><span></span></li>
            </ul>
        </nav>
    </div>
</div>
` 

conteudo_navbar = `

<iframe src="/common/header.html" style="width: 100%; border: none; padding: 0; margin: 0; top: 0; left: 0; right: 0;"></iframe>
` 

function criar_navbar() {
    let navbar = document.createElement("div");
    navbar.innerHTML = conteudo_navbar
    // document.head.appendChild(navbar)
    document.body.insertBefore(navbar, document.body.firstChild);
}

// // adiciona o header ao carregar
// document.addEventListener("DOMContentLoaded", criar_navbar());
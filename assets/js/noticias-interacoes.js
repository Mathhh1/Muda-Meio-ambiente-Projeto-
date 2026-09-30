(() => {
    const botaoMenu = document.querySelector('.btn-hamburguer');
    const botaoBusca = document.querySelector('.btn-lupa');

    if (!botaoMenu || !botaoBusca) return;

    const linksNavegacao = [
        ['notícias', '../index.html#noticias'],
        ['como ajudar', '../index.html#como-ajudar'],
        ['sobre nós', '../index.html#sobre-nos']
    ];
    const noticias = [
        ['Pecuária e emissões em Pernambuco', 'sp.html'],
        ['São Paulo atinge a menor temperatura do ano', 'sp-temperatura.html'],
        ['Impactos humanos nos oceanos brasileiros', 'oceanos.html'],
        ['João Pessoa amplia uso de energia solar', 'joao-pessoa-solar.html'],
        ['Recife amplia programa de reciclagem', 'recife-reciclagem.html'],
        ['Bahia fortalece programas de reciclagem', 'bahia-reciclagem.html'],
        ['Consumo de carne e mudanças climáticas', 'recife-consumo-carne.html']
    ];

    const overlay = document.createElement('div');
    overlay.className = 'menu-noticia-overlay';
    overlay.hidden = true;
    overlay.dataset.menuOverlay = '';

    const menu = document.createElement('nav');
    menu.className = 'menu-noticia';
    menu.id = 'menu-noticia';
    menu.hidden = true;
    menu.setAttribute('aria-label', 'Menu principal');
    linksNavegacao.forEach(([texto, destino]) => {
        const link = document.createElement('a');
        link.textContent = texto;
        link.href = destino;
        menu.appendChild(link);
    });

    const painelBusca = document.createElement('div');
    painelBusca.className = 'busca-noticia-painel';
    painelBusca.id = 'busca-noticia-painel';
    painelBusca.hidden = true;
    painelBusca.innerHTML = '<strong>Leia também</strong><ul></ul>';
    const listaBusca = painelBusca.querySelector('ul');
    noticias.forEach(([titulo, destino]) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = titulo;
        link.href = destino;
        item.appendChild(link);
        listaBusca.appendChild(item);
    });

    document.body.append(botaoMenu, overlay, menu, painelBusca);
    botaoMenu.setAttribute('aria-controls', menu.id);
    botaoBusca.setAttribute('aria-controls', painelBusca.id);

    let temporizadorMenu;
    let temporizadorBusca;

    function fecharMenu() {
        clearTimeout(temporizadorMenu);
        menu.classList.remove('aberto');
        overlay.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
        document.body.classList.remove('menu-noticia-aberto');
        temporizadorMenu = setTimeout(() => {
            menu.hidden = true;
            overlay.hidden = true;
        }, 350);
    }

    function abrirMenu() {
        fecharBusca();
        clearTimeout(temporizadorMenu);
        menu.hidden = false;
        overlay.hidden = false;
        botaoMenu.setAttribute('aria-expanded', 'true');
        botaoMenu.setAttribute('aria-label', 'Fechar menu');
        document.body.classList.add('menu-noticia-aberto');
        requestAnimationFrame(() => {
            menu.classList.add('aberto');
            overlay.classList.add('aberto');
        });
    }

    function fecharBusca() {
        clearTimeout(temporizadorBusca);
        painelBusca.classList.remove('aberto');
        botaoBusca.setAttribute('aria-expanded', 'false');
        botaoBusca.setAttribute('aria-label', 'Abrir sugestões de notícias');
        temporizadorBusca = setTimeout(() => {
            painelBusca.hidden = true;
        }, 300);
    }

    function abrirBusca() {
        fecharMenu();
        clearTimeout(temporizadorBusca);
        painelBusca.hidden = false;
        botaoBusca.setAttribute('aria-expanded', 'true');
        botaoBusca.setAttribute('aria-label', 'Fechar sugestões de notícias');
        requestAnimationFrame(() => painelBusca.classList.add('aberto'));
    }

    botaoMenu.addEventListener('click', (evento) => {
        evento.stopPropagation();
        botaoMenu.getAttribute('aria-expanded') === 'true' ? fecharMenu() : abrirMenu();
    });

    botaoBusca.addEventListener('click', (evento) => {
        evento.stopPropagation();
        botaoBusca.getAttribute('aria-expanded') === 'true' ? fecharBusca() : abrirBusca();
    });

    overlay.addEventListener('click', fecharMenu);
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', fecharMenu));
    painelBusca.addEventListener('click', (evento) => evento.stopPropagation());

    document.addEventListener('click', () => {
        if (botaoBusca.getAttribute('aria-expanded') === 'true') fecharBusca();
    });

    document.addEventListener('keydown', (evento) => {
        if (evento.key !== 'Escape') return;
        if (botaoMenu.getAttribute('aria-expanded') === 'true') fecharMenu();
        if (botaoBusca.getAttribute('aria-expanded') === 'true') fecharBusca();
    });
})();

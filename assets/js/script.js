/* Menu */
const btnHamburguer = document.querySelector('.btn-hamburguer');
const menuMobile = document.getElementById('menu-mobile');
const menuOverlay = document.querySelector('[data-menu-overlay]');
let timeoutMenuMobile;

function abrirMenuMobile() {
    clearTimeout(timeoutMenuMobile);
    menuMobile.hidden = false;
    menuOverlay.hidden = false;
    btnHamburguer.setAttribute('aria-expanded', 'true');
    btnHamburguer.setAttribute('aria-label', 'Fechar menu');
    document.body.classList.add('menu-mobile-aberto');

    requestAnimationFrame(() => {
        menuMobile.classList.add('aberto');
        menuOverlay.classList.add('aberto');
    });
}

function fecharMenuMobile() {
    clearTimeout(timeoutMenuMobile);
    menuMobile.classList.remove('aberto');
    menuOverlay.classList.remove('aberto');
    document.body.classList.remove('menu-mobile-aberto');
    btnHamburguer.setAttribute('aria-expanded', 'false');
    btnHamburguer.setAttribute('aria-label', 'Abrir menu');

    timeoutMenuMobile = setTimeout(() => {
        menuMobile.hidden = true;
        menuOverlay.hidden = true;
    }, 300);
}

btnHamburguer.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.contains('menu-mobile-aberto') ? fecharMenuMobile() : abrirMenuMobile();
});

menuMobile.addEventListener('click', (e) => {
    e.stopPropagation();
});

menuMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenuMobile);
});

menuOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
    fecharMenuMobile();
});

document.addEventListener('click', (e) => {
    if (!menuMobile.hidden && !menuMobile.contains(e.target) && !btnHamburguer.contains(e.target)) {
        fecharMenuMobile();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menuMobile.hidden) fecharMenuMobile();
});


/* Busca */
const btnBuscar = document.querySelector('.btn-buscar');
const painel = document.getElementById('busca-painel');
let timeoutBusca;

function abrirBusca() {
    clearTimeout(timeoutBusca);
    painel.hidden = false;
    btnBuscar.setAttribute('aria-expanded', 'true');
    btnBuscar.setAttribute('aria-label', 'Fechar sugestões');
    requestAnimationFrame(() => painel.classList.add('aberto'));
}

function fecharBusca() {
    clearTimeout(timeoutBusca);
    painel.classList.remove('aberto');
    btnBuscar.setAttribute('aria-expanded', 'false');
    btnBuscar.setAttribute('aria-label', 'Abrir sugestões');
    timeoutBusca = setTimeout(() => {
        painel.hidden = true;
    }, 300);
}

// Abre ou fecha a busca.
btnBuscar.addEventListener('click', (e) => {
    e.stopPropagation();
    painel.hidden ? abrirBusca() : fecharBusca();
});

// Fecha depois de escolher uma notícia.
painel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharBusca);
});

// Fecha ao clicar fora.
document.addEventListener('click', (e) => {
    if (!painel.hidden && !painel.contains(e.target)) fecharBusca();
});

// Fecha com Esc.
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !painel.hidden) fecharBusca();
});


/* Formulário de cadastro */
const btnCadastro = document.getElementById('btn-cadastro');
const formPainel = document.getElementById('form-cadastro');
const formCadastro = formPainel.querySelector('form');

btnCadastro.addEventListener('click', () => {
    const estaEscondido = formPainel.hidden;

    if (estaEscondido) {
        formPainel.hidden = false;
        // Inicia a animação.
        setTimeout(() => formPainel.classList.add('aberto'), 10);
        btnCadastro.textContent = 'Cancelar';
    } else {
        formPainel.classList.remove('aberto');
        // Esconde depois da animação.
        setTimeout(() => formPainel.hidden = true, 250);
        btnCadastro.textContent = 'Cadastre-se';
    }

    btnCadastro.setAttribute('aria-expanded', estaEscondido);
});

formCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita recarregar a página.
    alert('Cadastro enviado com sucesso! (simulação)');
    formCadastro.reset(); // Limpa os campos.
});

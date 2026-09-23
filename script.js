/* ===== Menu hamburguer ===== */
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

/* ===== Busca / sugestões (lupa) ===== */

const btnBuscar = document.querySelector('.btn-buscar');
const painel = document.getElementById('busca-painel');

function abrirBusca() {
    painel.hidden = false;

    btnBuscar.setAttribute('aria-expanded', 'true');
}

function fecharBusca() {
    painel.hidden = true;

    btnBuscar.setAttribute('aria-expanded', 'false');
}

// Abre ou fecha ao clicar na lupa
btnBuscar.addEventListener('click', (e) => {
    e.stopPropagation();

    painel.hidden ? abrirBusca() : fecharBusca();
});

// Fecha ao escolher uma sugestão
painel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharBusca);
});

// Fecha ao clicar fora do painel
document.addEventListener('click', (e) => {
    if (!painel.hidden && !painel.contains(e.target)) {
        fecharBusca();
    }
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !painel.hidden) {
        fecharBusca();
    }
});


/* =========================================
   FORMULÁRIO DE CADASTRO
========================================= */

const btnCadastro = document.getElementById('btn-cadastro');

const formPainel = document.getElementById('form-cadastro');

const formCadastro = formPainel.querySelector('form');

btnCadastro.addEventListener('click', () => {

    const estaEscondido = formPainel.hidden;

    if (estaEscondido) {

        formPainel.hidden = false;

        // Pequeno atraso para permitir a transição CSS
        setTimeout(() => {
            formPainel.classList.add('aberto');
        }, 10);

        btnCadastro.textContent = 'Cancelar';

    } else {

        formPainel.classList.remove('aberto');

        // Aguarda a animação terminar antes de esconder
        setTimeout(() => {
            formPainel.hidden = true;
        }, 250);

        btnCadastro.textContent = 'Cadastre-se';
    }

    btnCadastro.setAttribute('aria-expanded', estaEscondido);
});

// Simulação de envio do formulário
formCadastro.addEventListener('submit', (evento) => {

    evento.preventDefault();

    alert('Cadastro enviado com sucesso! (simulação)');
    formCadastro.reset(); // limpa os campos
});

const botaoMenu = document.querySelector(".btn-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");
const menuOverlay = document.querySelector(".menu-overlay");

function abrirMenuMobile() {
    botaoMenu.classList.add("ativo");
    menuMobile.classList.add("ativo");
    menuOverlay.classList.add("ativo");

    botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenuMobile() {
    botaoMenu.classList.remove("ativo");
    menuMobile.classList.remove("ativo");
    menuOverlay.classList.remove("ativo");

    botaoMenu.setAttribute("aria-expanded", "false");
}

function menuMobileAberto() {
    return menuMobile.classList.contains("ativo");
}

botaoMenu.addEventListener("click", function (evento) {
    evento.stopPropagation();

    if (menuMobileAberto()) {
        fecharMenuMobile();
    } else {
        abrirMenuMobile();
    }
});

menuOverlay.addEventListener("click", fecharMenuMobile);

menuMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenuMobile);
});

document.addEventListener("click", (evento) => {
    const clicouNoMenu = menuMobile.contains(evento.target);
    const clicouNoBotao = botaoMenu.contains(evento.target);

    if (menuMobileAberto() && !clicouNoMenu && !clicouNoBotao) {
        fecharMenuMobile();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menuMobileAberto()) {
        fecharMenuMobile();
    }
});

});

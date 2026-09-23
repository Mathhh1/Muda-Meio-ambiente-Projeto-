/* =========================================
   BUSCA / SUGESTÕES (LUPA)
========================================= */

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

    formCadastro.reset();
});

const botaoMenu = document.querySelector(".btn-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");

botaoMenu.addEventListener("click", function () {

    botaoMenu.classList.toggle("ativo");
    menuMobile.classList.toggle("ativo");

    const menuAberto = botaoMenu.classList.contains("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});
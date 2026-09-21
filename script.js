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

// Abre/fecha ao clicar na lupa
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
    if (!painel.hidden && !painel.contains(e.target)) fecharBusca();
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !painel.hidden) fecharBusca();
});
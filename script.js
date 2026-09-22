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


/* ===== Formulário de cadastro (Hero section) ===== */
const btnCadastro = document.getElementById('btn-cadastro');
const formPainel = document.getElementById('form-cadastro');
const formCadastro = formPainel.querySelector('form');

btnCadastro.addEventListener('click', () => {
    const estaEscondido = formPainel.hidden;

    if (estaEscondido) {
        formPainel.hidden = false;
        // pequeno delay pra garantir que a transição CSS rode
        setTimeout(() => formPainel.classList.add('aberto'), 10);
        btnCadastro.textContent = 'Cancelar';
    } else {
        formPainel.classList.remove('aberto');
        // espera a animação de saída terminar antes de esconder de vez
        setTimeout(() => formPainel.hidden = true, 250);
        btnCadastro.textContent = 'Cadastre-se';
    }

    btnCadastro.setAttribute('aria-expanded', estaEscondido);
});

formCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault(); // impede o formulário de recarregar a página
    alert('Cadastro enviado com sucesso! (simulação)');
    formCadastro.reset(); // limpa os campos
});
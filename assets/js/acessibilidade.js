(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const niveis = [1, 1.1, 1.2, 1.3];
    const chave = 'muda-tamanho-texto';
    let nivel = Number(localStorage.getItem(chave)) || 0;
    nivel = Math.max(0, Math.min(niveis.length - 1, nivel));

    const controles = document.createElement('div');
    controles.className = 'controle-acessibilidade';
    controles.innerHTML = `
        <button class="botao-acessibilidade" type="button" aria-label="Abrir opções de tamanho do texto" aria-expanded="false" aria-controls="acoes-acessibilidade">
            <svg aria-hidden="true" width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 21 10 6h2l6 15M6.5 15h9M19 10h7M22.5 6.5v7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 21c3-1 5-3 5-6-3 0-5 2-5 6Z" fill="#b7dc82"/>
            </svg>
        </button>
        <div class="acoes-acessibilidade" id="acoes-acessibilidade" hidden>
            <button type="button" data-acao="diminuir" aria-label="Diminuir tamanho do texto">A−</button>
            <button type="button" data-acao="aumentar" aria-label="Aumentar tamanho do texto">A+</button>
            <button type="button" data-acao="resetar" aria-label="Restaurar tamanho padrão do texto">A</button>
        </div>`;
    header.append(controles);

    const painel = controles.querySelector('.acoes-acessibilidade');
    const alternador = controles.querySelector('.botao-acessibilidade');
    const aplicar = () => {
        document.documentElement.style.zoom = String(niveis[nivel]);
        localStorage.setItem(chave, String(nivel));
    };
    aplicar();

    alternador.addEventListener('click', () => {
        const aberto = alternador.getAttribute('aria-expanded') !== 'true';
        alternador.setAttribute('aria-expanded', String(aberto));
        alternador.setAttribute('aria-label', aberto ? 'Fechar opções de tamanho do texto' : 'Abrir opções de tamanho do texto');
        painel.hidden = !aberto;
    });
    controles.addEventListener('click', (evento) => {
        const acao = evento.target.closest('[data-acao]')?.dataset.acao;
        if (!acao) return;
        if (acao === 'aumentar') nivel = Math.min(niveis.length - 1, nivel + 1);
        if (acao === 'diminuir') nivel = Math.max(0, nivel - 1);
        if (acao === 'resetar') nivel = 0;
        aplicar();
    });
})();

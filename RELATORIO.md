# 📚 Relatório de versões — Muda | Meio Ambiente Brasil

Este documento registra a evolução conhecida do projeto com base no histórico de commits do Git e nos arquivos presentes no repositório. As versões abaixo são marcos identificados pelas mensagens de commit; não há tags Git publicadas para elas. Os números são mantidos como aparecem no histórico.

> ⚠️ O site é um projeto educacional fictício. As notícias e funcionalidades de cadastro são demonstrações.

## 🧭 Resumo da evolução

O projeto começou como uma página estática para apresentar uma iniciativa ambiental. Ao longo das versões, recebeu estilos e scripts, identidade visual, cards de notícias, menu responsivo, busca com sugestões, formulário demonstrativo e páginas individuais para artigos. Em setembro de 2026, também foram corrigidos caminhos, imagens e interações das páginas de notícias. A organização atual separa páginas, estilos, scripts e imagens em diretórios próprios.

## 🗓️ Histórico de versões

### 🟢 Início do projeto — 17 e 18 de setembro de 2026

Os primeiros commits criaram a página `index.html`, os arquivos de estilo e script e a documentação inicial. O objetivo e a identidade do site foram definidos como um espaço educativo sobre meio ambiente.

**Registros relacionados:** `Create index.html`, `JS CSS`, `INDEX e CSS`, `Outline website objectives and features in README`.

### 🟢 Versão 0.0.1 — 18 de setembro de 2026

- 🌱 Primeira estrutura visual da página inicial.
- 🎨 Ajustes de layout e estilos básicos.
- 📝 Documentação inicial dos objetivos do site.

**Commit de referência:** `821cd19` — `Uptade 0.0.1`.

### 🟢 Versão 0.0.2 — 19 de setembro de 2026

- 📰 Primeiros conteúdos e destaques de notícias na página inicial.
- 🖼️ Inclusão de imagem para notícia principal.
- 🎨 Melhorias de layout e apresentação dos conteúdos.

**Commit de referência:** `62a9068` — `Atualização 0.0.2`.

### 🟢 Versão 0.0.4 — 22 de setembro de 2026

- 🧭 Ampliação da navegação e da estrutura da página.
- 📰 Inclusão de imagens e áreas destinadas a notícias.
- ⚙️ Evolução das interações em JavaScript e dos estilos.
- 📄 Criação de páginas de notícia ainda vazias para iniciar a expansão do conteúdo.

**Commit de referência:** `f0b32af` — `v.0.0.4`.

> Não foi localizado um commit identificado explicitamente como versão 0.0.3 no histórico disponível.

### 🟢 Versão 0.0.5 — 23 de setembro de 2026

O histórico contém mais de um commit com a identificação 0.0.5.

- 🧩 Reorganização e simplificação do HTML e do CSS.
- ⚡ Aprimoramento do JavaScript e das interações da página.
- 🧭 Melhorias na navegação e na interface para o usuário.

**Commits de referência:** `45d58dc` — `v0.0.5`; `7670962` — `v.0.0.5`.

### 🟢 Versão 0.0.5.1 — 23 de setembro de 2026

- 🎨 Refinamento dos estilos e da apresentação dos conteúdos.
- ➕ Inclusão de elementos e ajustes na página inicial.

**Commit de referência:** `ab5b17d` — `v.0.0.5.1`.

### 🟢 Versão 0.0.6 — 24 de setembro de 2026

- 🐄 Criação de uma página de artigo sobre pecuária.
- 🌊 Inclusão de conteúdo e imagem sobre vida marinha.
- 📰 Atualização da página inicial e dos cards de notícias.
- 🎨 Ampliação dos estilos do site.

**Commit de referência:** `e66cb70` — `v0.0.6`.

### 🟢 Versão 0.0.6.5 — 24 de setembro de 2026

- 🧱 Ajustes na estrutura e no conteúdo da página inicial.
- 🎨 Pequenos refinamentos visuais.

**Commit de referência:** `15fe170` — `v.0.0.6.5`.

### 🟢 Versão 0.0.7 — 27 de setembro de 2026

- 🖼️ Atualização da apresentação visual e de elementos da página.
- 🎨 Ajustes complementares nos estilos.

**Commit de referência:** `4fae3a2` — `v.0.0.7`.

### 🟢 Correções e melhorias após a versão 0.0.7 — 27 de setembro de 2026

- 📰 Criação e atualização de páginas individuais sobre temperatura em São Paulo, reciclagem, energia solar, pecuária e oceanos.
- 🖼️ Correção e padronização dos nomes de arquivos de imagens.
- 🔗 Correção de links e caminhos entre páginas e imagens.
- 🧭 Melhoria do menu, incluindo comportamento para telas menores.
- 🔎 Inclusão de sugestões de navegação na busca.
- ♿ Inclusão de melhorias de acessibilidade nos controles e botões.
- ✨ Adição de estilos e scripts próprios para interações das notícias.

**Commit de referência:** `1b78c47` — `Correções nas notícias e melhorias no menu`.

### 🔵 Organização e documentação atual — 30 de setembro de 2026

- 📁 Arquivos separados em `assets/css/`, `assets/js/`, `assets/images/` e `pages/noticias/`.
- 🔤 Páginas de notícias reunidas no diretório sem acento `pages/noticias/`.
- 🔗 Atualização dos caminhos relativos nos arquivos HTML para acompanhar a nova estrutura.
- 📝 README reescrito com descrição do projeto, tecnologias, estrutura, instruções de uso e aviso sobre conteúdos fictícios.
- 📋 Este relatório reúne os marcos de versão registrados no histórico e as mudanças atuais de organização.

Esta etapa ainda não possui uma versão numerada ou commit no histórico consultado.

## 🗂️ Estrutura atual

```text
.
├── index.html                 # Página inicial
├── assets/
│   ├── css/                   # Estilos gerais e das notícias
│   ├── images/                # Imagens, logos, ícones e vídeo
│   └── js/                    # Interações do site
├── pages/
│   └── noticias/              # Artigos individuais
├── README.md                  # Apresentação e instruções do projeto
└── RELATORIO.md               # Histórico de versões e alterações
```

## 🧪 Verificações registradas

- ✅ Após a reorganização, foi feita uma verificação automatizada dos caminhos locais `href` e `src` nos arquivos HTML; nenhum destino local inexistente foi encontrado.
- 📌 As verificações descritas no commit de setembro de 2026 incluem caminhos de imagens e recursos, sintaxe JavaScript, links entre páginas e presença dos controles de menu e busca.
- ℹ️ Este relatório não afirma que todas as versões históricas foram executadas ou testadas em navegadores; registra as mudanças conforme os commits e documentos disponíveis.

## 🧾 Observações sobre o histórico

- Os números de versão são os textos das mensagens de commit, não releases/tagueadas do Git.
- O histórico contém commits de merge e commits intermediários sem número de versão; este relatório agrupa esses registros por marcos e assunto para facilitar a leitura.
- A data usada é a data registrada pelo Git nos commits e pode diferir da data em que o trabalho foi iniciado.

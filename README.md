<div align="center">

# 🚀 PortifolioHUB — Abel Ogliari

**Portfólio profissional pessoal | Desenvolvimento de Sistemas, Automações e Dados em Economia da Saúde**

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen)](https://abelogliari.com.br/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-blue)](https://abelogliari.com.br/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

🌐 **Site no ar:** [abelogliari.com.br](https://abelogliari.com.br/)

</div>

---

## 📖 Sobre o Projeto

O **PortifolioHUB** é o repositório oficial do meu portfólio profissional online, criado como hub central para reunir, organizar e versionar meus projetos acadêmicos e pessoais. O site está hospedado gratuitamente via **GitHub Pages** com domínio próprio (`abelogliari.com.br`).

O projeto evoluiu de um site estático em **HTML, CSS e JavaScript puros** para uma aplicação em **ReactJS** (Create React App + SCSS), adaptada a partir do projeto de código aberto **developerFolio**. Toda a personalização de conteúdo fica concentrada no arquivo `src/portfolio.js`.

Este projeto faz parte do **Bootcamp I** do curso de graduação no **CEUB (Centro Universitário de Brasília)**, com foco em controle de versão (Git/GitHub), boas práticas de documentação, segurança de repositório e construção de portfólio profissional.

> 💡 **Objetivo:** demonstrar competências técnicas em desenvolvimento web, automações e integração de dados, ao mesmo tempo em que se aplicam práticas reais de versionamento, colaboração, segurança e publicação de código.

---

## ✨ Funcionalidades

- 🎨 **Layout responsivo** — adaptado para desktop, tablet e mobile
- 🌗 **Modo claro / escuro** — alternância de tema com um clique
- 🧭 **Navegação por seções** — Habilidades, Experiências, Educação, Projetos, Certificações e Contato
- 📄 **Download de currículo** — botão que serve o `resume.pdf` diretamente
- 🔗 **Open Graph** — `og-cover` para uma prévia rica ao compartilhar links
- 🔍 **SEO otimizado** com `meta tags`, `robots.txt` e domínio próprio
- 🌐 **Domínio personalizado** via `CNAME` apontando para o GitHub Pages
- 📁 **Estrutura modular** com componentes React reutilizáveis

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Ferramentas |
|-----------|-------------|
| **Front-end** | ReactJS, JavaScript (ES6+), SCSS/CSS3, HTML5 |
| **Base do projeto** | [developerFolio](https://github.com/saadpasta/developerFolio) (open source) |
| **Hospedagem** | GitHub Pages + GitHub Actions / `gh-pages` |
| **DNS / Domínio** | Domínio próprio (`abelogliari.com.br`) via `CNAME` |
| **Versionamento** | Git + GitHub (branches e pull requests) |
| **Editor** | Visual Studio Code |
| **SEO / Social** | Meta tags, `robots.txt`, Open Graph |

---

## 📂 Estrutura do Repositório

```
PortifolioHUB/
├── public/                            # Arquivos públicos servidos na raiz do site
│   ├── index.html                     # HTML base + meta tags (SEO / Open Graph)
│   ├── CNAME                          # Domínio personalizado (abelogliari.com.br)
│   ├── robots.txt                     # Diretrizes para crawlers
│   ├── og-cover.png                   # Imagem de capa para compartilhamento
│   ├── resume.pdf                     # Currículo disponibilizado para download
│   └── favicons / manifest            # Ícones e PWA
├── src/                               # Código-fonte da aplicação React
│   ├── assets/                        # Imagens, ícones e animações (Lottie)
│   ├── components/                    # Componentes reutilizáveis (header, cards, footer)
│   ├── containers/                    # Seções da página (greeting, education, projetos…)
│   ├── contexts/                      # Contextos (tema claro/escuro)
│   ├── hooks/                         # Hooks customizados
│   ├── portfolio.js                   # ⭐ Conteúdo do portfólio (edite aqui)
│   ├── _globalColor.scss              # Paleta de cores global
│   └── App.js / index.js              # Ponto de entrada da aplicação
├── fetch.js                           # Busca dados do GitHub no build (perfil/repos)
├── package.json                       # Dependências e scripts (start, build, deploy)
├── LICENSE                            # Licença MIT
├── SECURITY.md                        # Política de segurança do repositório
└── README.md                          # Este arquivo
```

---

## 🚧 Projetos em Destaque

### 🔹 Site Francisco Leal
Site institucional desenvolvido para o cliente **Francisco Leal**, com foco em apresentação clara e navegação simples.

- **Tecnologias:** HTML, CSS, JavaScript
- **Repositório:** [FranciscoLeal](https://github.com/abelogliari/FranciscoLeal)

### 🔹 PortifolioHUB — Portfólio Profissional
Este próprio repositório. Portfólio em **ReactJS**, responsivo e otimizado para SEO, publicado em domínio próprio via GitHub Pages.

- **Tecnologias:** ReactJS, SCSS, JavaScript
- **Demo:** [abelogliari.com.br](https://abelogliari.com.br/) · **Repositório:** [PortifolioHUB](https://github.com/abelogliari/PortifolioHUB)

### 🔹 Extrator CATMAT — Dados Abertos
Aplicação **Python** para extração de códigos do **Catálogo de Materiais (CATMAT)** via API do portal **Dados Abertos** do `Compras.gov.br`. Em fase experimental, com atualizações incrementais contínuas.

- **Tecnologias:** Python, APIs REST
- **Repositório:** [Extrator-CATMAT-DA](https://github.com/abelogliari/Extrator-CATMAT-DA)

### 🔹 Painel DJUD
Painel para acompanhamento e visualização de dados (DJUD).

- **Tecnologias:** Python, dados e visualização
- **Repositório:** [djud-painel](https://github.com/abelogliari/djud-painel)

---

## 🧠 Skills Demonstradas

- **Python** — aplicações, automações e integrações (ex.: Extrator CATMAT)
- **SQL & Bancos de Dados** — APIs, PostgreSQL e similares para análise de dados
- **ReactJS / Node.js / Docker** — desenvolvimento e empacotamento de aplicações web
- **HTML5, CSS3 e JavaScript** — construção de páginas web e mobile interativas
- **Git & GitHub** — versionamento, co-autoria, branches e pull requests
- **AstahUML / Excel & Google Sheets** — modelagem UML e automação de dados

---

## 🖥️ Como Executar Localmente

Pré-requisitos: ter o **Git** e o **Node.js** (com `npm`) instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/abelogliari/PortifolioHUB.git

# 2. Entre na pasta do projeto
cd PortifolioHUB

# 3. Instale as dependências
npm install

# 4. Rode em ambiente de desenvolvimento
npm start
# Acesse http://localhost:3000

# 5. (Opcional) Gere a versão de produção
npm run build
```

> 💡 **Dica:** a seção de contato pode exibir dados do perfil do GitHub. Para isso, o `fetch.js` usa um token do GitHub definido na variável de ambiente do build (`GITHUB_TOKEN`). Sem o token, o site funciona normalmente e o contato usa a versão padrão.

---

## 🗺️ Roadmap

- [x] Estrutura inicial do site (Home, Sobre, Projetos, Contato)
- [x] Publicação via GitHub Pages
- [x] Domínio próprio configurado (`abelogliari.com.br`)
- [x] SEO básico (meta tags, robots, Open Graph)
- [x] Migração para ReactJS (a partir do developerFolio)
- [x] Modo escuro (dark mode)
- [x] Políticas de segurança (LICENSE, SECURITY.md, `.gitignore`)
- [ ] Refatoração visual contínua
- [ ] Seção de blog técnico
- [ ] Integração com formulário de contato (backend)

---

## 🔒 Segurança

O repositório adota boas práticas de segurança:

- **LICENSE (MIT)** e **SECURITY.md** com política de divulgação responsável de vulnerabilidades
- **`.gitignore`** para evitar o versionamento de segredos (`.env`, `*.key`, `*.pem`)
- **Proteção da branch `main`** com pull request e revisão antes do merge
- **Secret scanning**, **push protection** e **Dependabot** habilitados
- **HTTPS** obrigatório no site publicado

---

## 📜 Versionamento

Este projeto adota o padrão **Git Flow simplificado**, com commits semânticos sempre que possível:

| Prefixo | Significado |
|---------|-------------|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Alterações na documentação |
| `style:` | Mudanças visuais ou de formatação |
| `refactor:` | Refatoração de código |
| `chore:` | Tarefas de manutenção |

O repositório está na versão **v2.0** (migração para ReactJS) e possui **mais de 30 commits** publicados, com alterações organizadas em **branches** e integradas via **pull requests**.

---

## 👤 Autor

**Abel Carlesso Ogliari**
Estudante de **Análise e Desenvolvimento de Sistemas** no **CEUB** | Atuação com dados em economia da saúde, automações e desenvolvimento web.

- 🌐 Site: [abelogliari.com.br](https://abelogliari.com.br/)
- 💼 LinkedIn: [linkedin.com/in/abel-carlesso-ogliari](https://www.linkedin.com/in/abel-carlesso-ogliari/)
- 💻 GitHub: [@abelogliari](https://github.com/abelogliari)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** — consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

⭐ **Se este projeto te ajudou ou inspirou, considere deixar uma estrela!** ⭐

Feito com 💙 por [Abel Ogliari](https://abelogliari.com.br/)

Baseado no template de código aberto [developerFolio](https://github.com/saadpasta/developerFolio), criado por [Saad Pasta](https://github.com/saadpasta).

</div>

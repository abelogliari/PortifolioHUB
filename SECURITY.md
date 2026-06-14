# Política de Segurança — PortifolioHUB

## Versões com suporte

Este repositório hospeda o portfólio profissional publicado em
[abelogliari.com.br](https://abelogliari.com.br/). A versão em produção é
sempre a publicada na branch `main`.

| Versão | Suporte            |
| ------ | ------------------ |
| `main` | ✅ Suportada        |
| Outras | ❌ Sem suporte      |

## Como reportar uma vulnerabilidade

Caso identifique uma vulnerabilidade, falha de configuração ou exposição
indevida de dados neste repositório ou no site publicado, **não abra uma
issue pública**. Reporte de forma privada:

- Pela aba **Security → Report a vulnerability** (GitHub Private Vulnerability
  Reporting), ou
- Pelo formulário de contato em [abelogliari.com.br](https://abelogliari.com.br/).

Compromisso de resposta:

- **Confirmação de recebimento:** em até 72 horas.
- **Avaliação e retorno:** em até 7 dias úteis.

## Boas práticas de segurança adotadas neste projeto

- **Sem segredos no código:** chaves, tokens e variáveis sensíveis nunca são
  versionadas. O arquivo [`.gitignore`](.gitignore) bloqueia `.env`, `*.key`,
  `*.pem` e arquivos de credenciais.
- **Proteção da branch `main`:** alterações entram via *pull request*, com
  revisão antes do merge, evitando pushes diretos não controlados.
- **Secret scanning + push protection:** habilitados nas configurações de
  segurança do repositório para impedir o commit acidental de credenciais.
- **Dependabot alerts:** monitoramento automático de dependências com
  vulnerabilidades conhecidas.
- **HTTPS obrigatório:** o GitHub Pages serve o site exclusivamente sobre
  HTTPS (*Enforce HTTPS* ativado), com certificado emitido automaticamente
  para o domínio personalizado.
- **Princípio do menor privilégio:** colaboradores recebem apenas o nível de
  acesso necessário; o repositório permanece público apenas para leitura.

## Escopo

Esta política cobre o código-fonte deste repositório e o site estático
publicado a partir dele. Serviços de terceiros (GitHub Pages, provedor de DNS)
seguem suas próprias políticas de segurança.

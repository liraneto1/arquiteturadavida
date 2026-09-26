# Arquitetura da Vida

Primeira etapa do site: Home narrativa com 17 seções, identidade carvão/marfim/ouro mineral, navegação responsiva, camadas exploráveis e localizador de ciclos calculado no navegador.

## Desenvolvimento

Requer Node.js 20 ou superior. Sem dependências externas de execução ou instalação.

```sh
npm run dev
npm test
npm run build
```

A prévia abre em `http://127.0.0.1:4173`. O resultado publicável fica em `dist/`. As fontes editoriais usadas são os documentos fornecidos pelo responsável pelo projeto, especialmente PRD V1.0, Brand Board e HOME V1.0. Eles não são copiados para este repositório público.

## Hostinger

O site entrega HTML, CSS, JavaScript e imagens estáticos. Não exige Node.js no servidor. Após revisão, o conteúdo de `dist/` pode ser enviado à pasta pública do domínio. Confirmar primeiro o tipo de hospedagem, fazer backup do site existente e testar em ambiente de prévia. Não há publicação automática configurada.

## Estado da primeira entrega

- Home e navegação interna implementadas; páginas Pesquisa, Ciclos detalhados, Caderno, Sobre e Minha Jornada serão entregues nas próximas etapas.
- O menu desta prévia aponta para seções reais da Home. A navegação definitiva será introduzida com as respectivas páginas.
- Idade não é armazenada nem enviada. Não há analytics, cookies, cadastro ou formulários de contato.
- Tipografia remota do Google Fonts com fontes locais de fallback; avaliar auto-hospedagem antes da produção.
- Fotografia de abertura gerada para o projeto. Marca tipográfica provisória até integração do arquivo final.
- Este conteúdo apresenta a pesquisa e sua cosmovisão; não oferece diagnósticos ou aconselhamento de saúde.

## Organização

`site/` contém o site; `scripts/` contém prévia e preparação; `tests/` verifica limites do localizador; `docs/` registra escopo e validação. A imagem de abertura foi criada com IA para o projeto e não representa o pesquisador.

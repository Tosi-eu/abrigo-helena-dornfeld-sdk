# @porto-sdk/sdk

Tipos e entidades compartilhados do sistema Porto (estoque, medicamentos, residentes, movimentações). Use no backend e no frontend para manter uma única fonte de verdade.

## Instalação

**A partir do npm** (repositório publicado na org `porto-sdk`):

```bash
npm install @porto-sdk/sdk
# ou
pnpm add @porto-sdk/sdk
```

O `backend` e o `frontend` do monorepo usam **`"@porto-sdk/sdk": "^0.1.0"`** — o pacote é obtido do registry (não é necessário ter a pasta `sdk` ao lado do app). Isto permite CI em repositórios só-frontend ou só-backend.

## Desenvolver o SDK localmente (sem publicar)

Na pasta `sdk`, depois de alterar código:

```bash
cd sdk && npm run build && npm link
cd ../frontend && npm link @porto-sdk/sdk
# ou com pnpm: pnpm link --global (conforme doc) ou pnpm add @porto-sdk/sdk@file:../sdk
```

Alternativa temporária no `package.json` do app:

```json
"@porto-sdk/sdk": "file:../sdk"
```

## Publicar no npm

1. Cria a organização **porto-sdk** em [npmjs.com](https://www.npmjs.com/org/create) (o scope será `@porto-sdk`).
2. Confirma que estás autenticado: `npm login` / `npm whoami`.
3. Na pasta `sdk`:

```bash
npm run build
npm publish --access public
```

O `package.json` já inclui `"publishConfig": { "access": "public" }` e `prepublishOnly` corre o build.

## Uso

```ts
import type { PublicTenantListItem, TenantConfigResponse } from "@porto-sdk/sdk";
```

Contratos multi-tenant (login, branding) na documentação do produto Porto.

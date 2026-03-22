# @porto-sdk/sdk

Tipos e entidades compartilhados do sistema Porto (estoque, medicamentos, residentes, movimentações). Use no backend e no frontend para manter uma única fonte de verdade.

## Instalação

**A partir do npm** (repositório publicado na org `porto-sdk`):

```bash
npm install @porto-sdk/sdk
```

**No monorepo Porto** o `backend` e o `frontend` usam `file:../sdk` no `package.json`; não é necessário publicar para desenvolver localmente.

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

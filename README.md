# @abrigo/sdk

Tipos e entidades compartilhados do sistema Abrigo (estoque, medicamentos, residentes, movimentações). Use no backend e no frontend para manter uma única fonte de verdade.

## Instalação

```bash
npm install @abrigo/sdk
```

Ou, durante o desenvolvimento local (caminho ou link):

```bash
npm install ../abrigo-sdk
# ou
npm link ../abrigo-sdk
```

## Uso

```ts
import {
  SectorType,
  Resident,
  Medicine,
  StockItem,
  StockFilterType,
  PaginatedResponse,
} from "@abrigo/sdk";
```

## Conteúdo

- **enums**: `OperationType`, `ItemStockType`, `MovementType`, `SectorType`, `EventStatus`, `NotificationEventType`, etc.
- **entities**: `Resident`, `Medicine`, `Input`, `Cabinet`, `Drawer`, `StockItem`, `Movement`, `LoggedUser`, etc.
- **api**: `PaginatedResponse`, `AdminMetricsResponse`, `AdminActiveUserThisMonth`, etc.

## Build

```bash
npm install
npm run build
```

O pacote pode ser publicado no npm (público ou privado) ou usado via link local até você substituir as interfaces nos repositórios do backend e frontend.

/**
 * Enums compartilhados do domínio Abrigo.
 */

export enum OperationType {
  MEDICINE = "medicamento",
  INPUT = "insumo",
}

export enum OriginType {
  FAMILIA = "Família",
  ALTOCUSTO = "Altocusto",
  UBS = "UBS",
  FARMACIA_POPULAR = "Farmácia Popular",
  COMPRA_DOACAO = "Compra/Doação",
}

export enum ItemStockType {
  GERAL = "geral",
  INDIVIDUAL = "individual",
  CARRINHO = "carrinho_emergencia",
  CARRINHO_PSICOTROPICOS = "carrinho_psicotropicos",
}

export enum MovementType {
  IN = "entrada",
  OUT = "saida",
  TRANSFER = "transferencia",
}

export enum EventStatus {
  PENDENTE = "pending",
  ENVIADO = "sent",
  CANCELADO = "cancelled",
}

export enum SectorType {
  FARMACIA = "farmacia",
  ENFERMAGEM = "enfermagem",
}

export enum NotificationEventType {
  MEDICAMENTO = "medicamento",
  REPOSICAO_ESTOQUE = "reposicao_estoque",
}

export enum NotificationDestinoType {
  SUS = "sus",
  FAMILIA = "familia",
  FARMACIA = "farmacia",
  ESTOQUE = "estoque",
}

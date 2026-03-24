/**
 * Formas usadas pelos repositórios / Sequelize (persistência).
 * Complementam as entidades “de API” onde o contrato difere (ex.: categoria_id vs nome).
 */

export interface CabinetPersist {
  numero: number;
  categoria_id: number;
}

export interface DrawerPersist {
  numero: number;
  categoria_id: number;
}

export interface MedicineStockRecord {
  medicamento_id: number;
  armario_id?: number | null;
  gaveta_id?: number | null;
  validade: Date;
  quantidade: number;
  origem: string;
  tipo: string;
  casela_id: number | null;
  setor: string;
  lote?: string | null;
  /** Ex.: valores do enum de persistência no backend (`active` / `suspended`). */
  status?: string;
  suspended_at?: Date | null;
  observacao?: string | null;
}

export interface InputStockRecord {
  insumo_id: number;
  casela_id?: number | null;
  armario_id?: number | null;
  gaveta_id?: number | null;
  quantidade: number;
  validade: Date;
  tipo: string;
  setor: string;
  lote?: string | null;
  status?: string;
  suspended_at?: Date | null;
}

export interface MovementRecord {
  tenant_id: number;
  tipo: string;
  login_id: number;
  armario_id?: number;
  gaveta_id?: number;
  quantidade: number;
  insumo_id?: number | null;
  medicamento_id?: number | null;
  casela_id?: number | null;
  validade: Date;
  setor: string;
  destino?: string | null;
  lote?: string | null;
  observacao?: string | null;
}


import type { MovementType } from "../enums.js";

export interface Movement {
  tipo: MovementType;
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

export interface StockHistoryEntry {
  id: number;
  tipo: string;
  data: string;
  quantidade: number;
  setor: string;
  lote: string | null;
  nome: string;
  operador: string;
  armario_id: number | null;
  casela_id: number | null;
  residente: string | null;
  item_type?: "medicamento" | "insumo";
}

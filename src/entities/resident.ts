/**
 * Residente / paciente (casela).
 */

export interface Resident {
  casela: number;
  nome: string;
}

/** Alias para uso em listas (ex.: seleção de casela por nome). */
export interface ResidentOption {
  casela: number;
  name: string;
}

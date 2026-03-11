/**
 * Notificações / eventos de reposição.
 */

export interface AdminNotificationItem {
  id: number;
  destino: string;
  data_prevista: string;
  status: string;
  criado_por: number;
  residente_nome?: string;
  medicamento_nome?: string;
  usuario: string;
  visto: boolean;
  tipo_evento: string;
}

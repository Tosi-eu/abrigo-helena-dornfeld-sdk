
export interface Cabinet {
  numero: number;
  categoria: string;
}

export interface CabinetCategory {
  id: number;
  nome: string;
}

export interface Drawer {
  numero: number;
  categoria?: string;
  categoria_id?: number;
}

export interface DrawerCategory {
  id: number;
  nome: string;
}

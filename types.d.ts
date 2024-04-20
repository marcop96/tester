export interface Inventory {
  items: object[];
  gold: number;
}

export interface Item {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity?: number;
  exp?: number;
  difficulty?: number;
}

export interface Skills {
  [key: string]: Skill;
}

export interface Skill {
  id: number;
  level: number;
  exp: number;
}

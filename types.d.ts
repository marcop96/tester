export interface Inventory {
  items: object[];
  gold: number;
}

export interface Item {
  id: number;
  name: string;
  type: string;
  price: number;
  skill: SkillName;
  quantity?: number;
  exp?: number;
  difficulty?: number;
}

export interface Skills {
  [key: SkillName]: SkillProperties;
}

export interface SkillProperties {
  id: number;
}
export type SkillName = "woodcutting" | "mining" | "smithing";

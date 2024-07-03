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
  skill?: string;
}

export interface Skill {
  [key: SkillName]: SkillProperties;
}

export interface SkillProperties {
  id: number;

}

export type SkillName = "woodcutting" | "mining" | "smithing";

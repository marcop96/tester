import { ref } from "vue";
import type { Skills } from "../types.d.ts";

export const useSkillsStore = defineStore("skills", () => {
  const skills = ref<Skills>({
    woodcutting: {
      id: 1,
      level: 1,
      exp: 0,
    },
    mining: {
      id: 2,
      level: 1,
      exp: 0,
    },
    smithing: {
      id: 3,
      level: 1,
      exp: 0,
    },
  });

  const changeActiveSkill = (skill: string) => {
    activeSkill.value = skill;

    console.log("Active skill changed to: ", activeSkill.value);
  };

  const activeSkill = ref("woodcutting");
  const skillNames = Object.keys(skills.value);

  return { skills, skillNames, activeSkill, changeActiveSkill };
});

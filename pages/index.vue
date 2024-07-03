<script setup lang="ts">
  import { Progress } from "../components/ui/progress";
  import { useInventory } from "../composable/useInventory";
  import useAction from "../composable/useAction";
  import ActionCard from "../components/ui/ActionCard.vue";
  import resources from "../data/resources.json";
  import { useSkillsStore } from "../composable/useSkills";
  import type { Item } from "~/types";
  // const { addItemToInventory, removeItemFromInventory, itemCount } =
  //   useInventory();
  const { runAction, inventory, progress, activeItem } = useAction();

  const skillStore = useSkillsStore();
</script>

<template>
  <div v-if="skillStore.activeSkill !== 'inventory'" class="p-4 mx-auto">
    <div class="p-4 flex justify-center">
      <Progress v-model="progress" class="w-4/5 h-10" />
    </div>
    <div class="p-4 text-center">
      {{ skillStore.activeSkill }}</div>
    <div class="grid grid-cols-3 p-4">
      <ActionCard v-for="res in resources.filter((r: Item) => r.skill === skillStore.activeSkill)" :key="res.id"
        :item="res" :activeItem="activeItem" :activeSkill="skillStore.activeSkill"
        @click="runAction(res, res.difficulty)">
      </ActionCard>
    </div>
  </div>
  <div v-if="skillStore.activeSkill === 'inventory'" class="p-4 mx-auto">
    Inventory:
    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

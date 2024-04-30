<script setup lang="ts">
import { Progress } from "../components/ui/progress";
import { useInventory } from "../composable/useInventory";
import useAction from "../composable/useAction";
import InfoActionButton from "../components/ui/InfoActionButton.vue";
import resources from "../data/resources.json";
import { useSkillsStore } from "../composable/useSkills";
// const { addItemToInventory, removeItemFromInventory, itemCount } =
//   useInventory();
const { runAction, inventory, progress, activeItem } = useAction();

const store = useSkillsStore();
</script>

<template>
  <div v-if="store.activeSkill !== 'inventory'" class="p-4 mx-auto">
    <div class="p-4 flex justify-center">
      <Progress v-model="progress" class="w-4/5 h-10" />
    </div>
    <div class="grid grid-cols-3 p-4">
      <InfoActionButton
        v-for="res in resources.filter((r) => r.skill === store.activeSkill)"
        :key="res.id"
        :item="res"
        :activeItem="activeItem"
        :activeSkill="store.activeSkill"
        @click="runAction(res)"
      ></InfoActionButton>
    </div>
  </div>
  <div v-if="store.activeSkill === 'inventory'" class="p-4 mx-auto">
    Inventory:
    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

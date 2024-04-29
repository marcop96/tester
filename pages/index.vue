<script setup lang="ts">
import { ref } from "vue";
import { Progress } from "../components/ui/progress";
import { useInventory } from "../composable/useInventory";
import useAction from "../composable/useAction";
import InfoActionButton from "../components/ui/InfoActionButton.vue";
import resources from "../data/resources.json";
import { useSkillsStore } from "../composable/useSkills";
const { addItemToInventory, removeItemFromInventory, itemCount } =
  useInventory();
const { runAction, inventory, progress, activeItem } = useAction();

const store = useSkillsStore();

setTimeout(() => {
  console.log(store);
}, 1000);
</script>

<template>
  <div class="p-4 mx-auto">
    <div class="p-4 flex justify-center">
      <Progress v-model="progress" class="w-4/5 h-10" />
    </div>

    <div class="grid grid-cols-3 p-4">
      <InfoActionButton
        v-for="res in resources.filter((r) => r.skill === store.activeSkill)"
        :key="res.id"
        action="chop"
        :item="res"
        :activeItem="activeItem"
        @click="runAction(res)"
      ></InfoActionButton>
    </div>
  </div>
  <div>
    Inventory:
    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

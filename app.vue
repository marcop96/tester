<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
import { useInventory } from "./composable/useInventory";
import type { Item } from "./types";
import logs from "./data/woodcutting/logs";
import useAction from "./composable/useAction";
import InfoActionButton from "./components/ui/InfoActionButton.vue";
const { addItemToInventory, removeItemFromInventory, itemCount } =
  useInventory();
const { runAction, inventory, progress, activeItem } = useAction();
</script>

<template>
  <div class="p-4 mx-auto">
    <div class="p-4 flex justify-center">
      <!-- Display the progress bar for progress.one -->
      <Progress v-model="progress" class="w-4/5 h-10" />
    </div>

    <div class="grid grid-cols-2 p-4">
      <InfoActionButton
        v-for="log in logs"
        :key="log.id"
        action="chop"
        :item="log"
        :activeItem="activeItem"
        @click="runAction(log)"
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

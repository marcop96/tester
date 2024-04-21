<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
import { useInventory } from "./composable/useInventory";
import type { Item } from "./types";
import logs from "./data/woodcutting/logs";
import useAction from "./composable/useAction";
const { addItemToInventory, removeItemFromInventory, itemCount } =
  useInventory();
const { inventory, progress, runAction } = useAction();
</script>

<template>
  <div class="p-4 mx-auto">
    <div class="p-4 flex justify-center">
      <!-- Display the progress bar for progress.one -->
      <Progress v-model="progress" class="w-4/5 h-10" />
    </div>

    <div class="grid grid-cols-5 p-4">
      <button
        v-for="log in logs"
        :key="log.id"
        class="bg-gray-400 rounded-sm gap-4 m-2 w-32 h-32"
        @click="runAction(log, log.difficulty)"
      >
        {{ log.name }}
      </button>
    </div>
  </div>
  <div>itemcount: {{ itemCount }}</div>
  <div>
    Inventory:
    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

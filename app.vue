<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
import { useInventory } from "./composable/useInventory";
import type { Item } from "./types";
import logs from "./data/woodcutting/logs";
const gold = useInventory().gold;
const inventory = useInventory().inventory;
const selectedWood = ref<Item>({
  id: 100,
  price: 4,
  type: "log",
  name: "Normal Log",
  exp: 25,
});

const progress = reactive({
  one: 0,
  two: 0,
});

let isChopping = false;

async function runProgress(
  progressKey: keyof typeof progress,
  duration = 1000
) {
  if (isChopping) return;
  isChopping = true;

  let currentProgress = 0;
  if (inventory.value.some((item: Item) => item.type === "axe")) {
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress <= 100) {
        progress[progressKey] = currentProgress;
      } else {
        clearInterval(interval);
        progress[progressKey] = 0;
        isChopping = false;
        const logItem = inventory.value.find(
          (item: Item) => item.name === `${selectedWood.value.name}`
        );
        if (logItem && logItem.quantity) {
          logItem.quantity += 1;
        } else {
          inventory.value.push({
            ...selectedWood.value,
            quantity: 1,
          });
        }
      }
    }, duration / 100);
  } else {
    console.error("You need a bronze axe or better to cut down a log.");
  }
}
</script>

<template>
  <div class="p-4 mx-auto">
    <div class="p-4">
      <Progress v-model="progress.one" class="w-3/5 h-10" />
    </div>
    <div class="p-4">
      <Progress v-model="progress.two" class="w-3/5 h-10" />
    </div>
    <button
      @click="runProgress('one', 50)"
      class="mt-4 p-4"
      :disabled="isChopping"
    >
      Run Progress 1
    </button>
    <button
      @click="runProgress('two', 220)"
      class="mt-4 p-4"
      :disabled="isChopping"
    >
      Run Progress 2
    </button>
  </div>
  <div>Gold: {{ gold }}</div>
  <div>
    Inventory:
    <ul>
      <li v-for="item in inventory" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

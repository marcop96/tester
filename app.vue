<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
import { useInventory } from "./composable/useInventory";
import type { Item } from "./types";
import logs from "./data/woodcutting/logs";

// Get the gold value from the inventory
const gold = useInventory().gold;

// Get the inventory items from the inventory
const inventory = useInventory().inventory;

// Define the selected wood item
const selectedWood = ref<Item>({
  id: 100,
  price: 4,
  type: "log",
  name: "Normal Log",
  exp: 25,
});

// Define the progress object
const progress = reactive({
  one: 0,
});

// Define the chopping state
let isChopping = false;

// Function to run the progress
async function runProgress(log: Item, duration = 1000) {
  console.log(log.name);
  // If already chopping, return
  if (isChopping) return;
  isChopping = true;

  let currentProgress = 0;
  // Check if the player has an axe in the inventory
  if (inventory.value.some((item: Item) => item.type === "axe")) {
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress <= 100) {
        // Update the progress value
        progress.one = currentProgress;
      } else {
        clearInterval(interval);
        // Reset the progress value
        progress.one = 0;
        isChopping = false;
        // Find the selected wood item in the inventory
        const logItem = inventory.value.find(
          (item: Item) => item.name === `${log.name}`
        );
        if (logItem && logItem.quantity) {
          // Increase the quantity of the selected wood item
          logItem.quantity += 1;
        } else {
          // Add the selected wood item to the inventory
          inventory.value.push({
            ...log,
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
      <!-- Display the progress bar for progress.one -->
      <Progress v-model="progress.one" class="w-3/5 h-10" />
    </div>
    <div class="p-4"></div>

    <div class="p-4">
      <li v-for="log in logs" :key="log.id">
        <button @click="runProgress(log, 400)" :disabled="isChopping">
          {{ log }}
        </button>
      </li>
    </div>
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

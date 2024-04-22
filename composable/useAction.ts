import type { Item } from "../types.d.ts";
import { useInventory } from "./useInventory";
const {
  inventory,
  addItemToInventory,
  checkForItemType,
  removeItemFromInventory,
  itemCount,
} = useInventory();

export default function useAction() {
  let isChopping = false;
  const progress = ref(0);
  async function runAction(log: Item, duration = 1000) {
    // If already chopping, return
    if (isChopping) return;
    isChopping = true;

    let currentProgress = 0;
    // Check if the player has an axe in the inventory

    if (checkForItemType("axe")) {
      const interval = setInterval(() => {
        currentProgress += 1;
        if (currentProgress <= 100) {
          // Update the progress value
          progress.value = currentProgress;
        } else {
          clearInterval(interval);
          // Reset the progress value
          progress.value = 0;
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
            addItemToInventory(log);
          }
        }
      }, duration / 100);
    } else {
      console.error("You need a bronze axe or better to cut down a log.");
    }
  }
  return { runAction, inventory, progress };
}

import type { Item } from "../types.d.ts";
import { useInventory } from "./useInventory";
const { inventory, addItemToInventory, checkForItemType } = useInventory();

const activeItem = ref<Item | null>(null);
const isRunningAction = ref(false);
export default function useAction() {

  const progress = ref(0);

  async function runAction(item: Item, duration = 1000) {
    if (isRunningAction.value) return;
    if (activeItem.value && activeItem.value.name === item.name) return;
    activeItem.value = item;
    let currentProgress = 0;
    if (checkForItemType("axe")) {
      const interval = setInterval(() => {
        isRunningAction.value = true;
        currentProgress += 1;
        if (currentProgress <= 100) {
          // Update the progress value
          progress.value = currentProgress;
        } else {
          clearInterval(interval);
          // Reset the progress value
          progress.value = 0;
          isRunningAction.value = false;
          // Find the selected wood item in the inventory
          const logItem = inventory.value.find(
            (i: Item) => i.name === `${item.name}`,
          );

          if (logItem && logItem.quantity) {
            // Increase the quantity of the selected wood item
            logItem.quantity += 1;
          } else {
            // Add the selected wood item to the inventory

            addItemToInventory(item);
          }
          activeItem.value = null;
        }
      }, duration / 100);
    } else {
      activeItem.value = null;

      console.error("You need a bronze axe or better to cut down a log.");
    }
  }
  return { runAction, inventory, progress, activeItem };
}

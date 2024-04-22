import type { Item } from "../types.d.ts";

export const useInventory = () => {
  const inventory = ref<Item[]>([
    {
      id: 1,
      name: "bronze axe",
      type: "axe",
      price: 10,
      quantity: 1,
    },
  ]);
  const addItemToInventory = (item: Item) => {
    inventory.value.push({
      ...item,
      quantity: 1,
    });
  };
  const checkForItemType = (itemType: string) => {
    return inventory.value.some((i) => i.type === itemType);
  };

  const removeItemFromInventory = (item: Item) => {
    inventory.value = inventory.value.filter((i) => i.id !== item.id);
  };

  const itemCount = computed(() => inventory.value.length);

  return {
    inventory,
    addItemToInventory,
    checkForItemType,
    removeItemFromInventory,
    itemCount,
  };
};

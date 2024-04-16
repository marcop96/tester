import type { Item } from "../types.d.ts";

/*
maybe in the future separate inventory from toolbelt? and auto assign tools
to toolbelt when bought, then just use the better tool in the toolbelt OR equip the corresponding
tool intended to use, that could speed up the Tool check, will loop only between tools instead of 
all items in the inventory
*/
export function useInventory() {
  const inventory = ref<Item[]>([
    {
      id: 1,
      name: "bronze axe",
      type: "axe",
      price: 10,
      quantity: 1,
    },
  ]);
  const gold = ref(99);

  return { inventory, gold };
}

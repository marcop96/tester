<script setup lang="ts">
import type { Item } from "@/types";
const props = defineProps({
  action: {
    type: String,
  },
  item: {
    type: Object as () => Item,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-center bg-red-400 rounded-sm gap-4 m-2 w-48 h-48">
    <span>{{ props.action }}</span>
    <span>{{ props.item.name }}</span>
    <span>{{ props.item.exp }}</span>
  </div>
</template>

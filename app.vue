<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Progress } from "@/components/ui/progress";

const progress = ref(0);
onMounted(() => {
  let currentProgress = 0;
  const interval = setInterval(() => {
    currentProgress += 1; // Increase by 25 every second
    if (currentProgress <= 100) {
      progress.value = currentProgress;
    } else {
      clearInterval(interval);
    }
  }, 10); // Run every 1 second
  currentProgress = 0;
});
</script>

<template>
  <div class="p-4 mx-auto">
    <Progress v-model="progress" class="w-3/5" />
  </div>
</template>

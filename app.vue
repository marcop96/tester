<script setup lang="ts">
import { reactive } from "vue";
import { Progress } from "@/components/ui/progress";

const progress = reactive({
  one: 0,
  two: 0,
});

let isProgressRunning = false;

function runProgress(progressKey: keyof typeof progress, duration = 1000) {
  if (isProgressRunning) return;
  isProgressRunning = true;

  let currentProgress = 0;
  const interval = setInterval(() => {
    currentProgress += 1;
    if (currentProgress <= 100) {
      progress[progressKey] = currentProgress;
    } else {
      clearInterval(interval);
      progress[progressKey] = 0;
      isProgressRunning = false;
    }
  }, duration / 100);
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
      :disabled="isProgressRunning"
    >
      Run Progress 1
    </button>
    <button
      @click="runProgress('two', 2000)"
      class="mt-4 p-4"
      :disabled="isProgressRunning"
    >
      Run Progress 2
    </button>
  </div>
</template>

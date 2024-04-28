<template>
  <div class="h-screen fixed w-48 left-0 top-0 bg-green-400 bg-opacity-75 p-4">
    <transition name="fade">
      <div
        v-if="open"
        class="flex flex-row max-w-lg transition-color duration-1000"
      >
        <div class="flex-1">
          <ul>
            <li class="block transform origin-center font-bold">Cooking</li>
            <li class="block transform origin-center font-bold">Fishing</li>
            <li class="block transform origin-center font-bold">Hiking</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
  <button class="absolute" @click="toggle">toggle</button>
  <!-- <div>
    <NuxtPage />
  </div> -->
</template>

<script setup>
import { ref } from "vue";

const open = ref(true);

const toggle = () => {
  open.value = !open.value;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

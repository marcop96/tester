<script setup lang="ts">
import { useSkillsStore } from "../composable/useSkills";
const store = useSkillsStore();
</script>
<template>
  <div class="flex">
    <div class="h-screen w-1/5 bg-green-400 bg-opacity-75 p-4">
      <h2
        class="text-2xl font-bold"
        @click="store.changeActiveSkill('inventory')"
      >
        Inventory
      </h2>

      <h2 class="text-2xl font-bold">Skills</h2>
      <ul>
        <li
          v-for="name in store.skillNames"
          @click="store.changeActiveSkill(name)"
          class="block transform origin-center font-bold hover:cursor-pointer"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="flex-1"><NuxtPage /></div>
  </div>
</template>
<style></style>

<script setup lang="ts">
import useSkills from "../composable/useSkills";
const { skills, skillNames, activeSkill } = useSkills();

function changeSkill(skill: string) {
  activeSkill.value = skill;

  console.log(activeSkill.value);
}
</script>
<template>
  <div class="flex">
    <div class="h-screen w-1/5 bg-green-400 bg-opacity-75 p-4">
      <ul>
        <li
          v-for="name in skillNames"
          @click="changeSkill(name)"
          class="block transform origin-center font-bold"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <NuxtPage />
    </div>
  </div>
</template>

<style></style>

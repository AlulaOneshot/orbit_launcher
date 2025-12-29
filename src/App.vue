<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  if (!route.path.startsWith("/initial_setup/")) {
    router.push("/initial_setup/language");
  }
})
</script>

<template>
  <h1 class="text-black absolute top-2 left-2">DEV BUILD - DO NOT RELEASE</h1>
  <RouterView/>
</template>
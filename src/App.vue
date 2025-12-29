<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

const navigationDirection = ref("slide-next");

watch(route, (to, from) => {
  const toIndex = to.meta.index ?? 0;
  const fromIndex = from?.meta.index ?? 0;

  if (toIndex < fromIndex) {
    navigationDirection.value = 'slide-prev'; // Slide to the Right (Back)
  } else {
    navigationDirection.value = 'slide-next'; // Slide to the Left (Forward)
  }
});

onMounted(() => {
  if (!route.path.startsWith("/initial_setup/")) {
    router.push("/initial_setup/");
  }
})
</script>

<template>
  <h1 class="text-black absolute top-2 left-2">DEV BUILD - DO NOT RELEASE</h1>
  <div class="w-screen h-screen bg-purple-100 overflow-hidden relative">
    <RouterView v-slot="{ Component }">
      <Transition :name="navigationDirection" mode="out-in">
        <component :is="Component" :key="route.path"/>
      </Transition>
    </RouterView>
  </div>
</template>

<style>
/* The 'name' property on the <Transition> maps to these classes */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease;
}

/* Starting state of the new screen (off-screen to the right) */
.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

/* Ending state of the old screen (off-screen to the left) */
.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* The 'Reverse' Slide */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease;
  position: absolute;
  width: 100%;
}

/* New screen comes in from the LEFT */
.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

/* Old screen leaves to the RIGHT */
.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

   /* Shared transition properties for both directions */
 .slide-next-enter-active,
 .slide-next-leave-active,
 .slide-prev-enter-active,
 .slide-prev-leave-active {
   transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease;
   position: absolute; /* Essential to keep screens on the same plane */
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
 }

/* SLIDE NEXT (Forward) */
.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* SLIDE PREV (Backward) */
.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
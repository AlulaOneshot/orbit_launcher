<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
import {play_track, register_track, register_track_looping} from "../../lib/bgm_manager.js";
import TextButton from "../../lib/components/TextButton.vue";
import GlassLayer from "../../lib/components/GlassLayer.vue";

  const router = useRouter();

  onMounted(async () => {

  })
</script>

<template>
  <div class="w-screen h-screen">
    <div class="h-1/2 w-full flex flex-col justify-center items-center bg-purple-100">
      <GlassLayer>
        <GlassLayer border_radius="rounded-full" other_classes="aspect-square shadow-purple-100/10" bg_color="bg-radial-[at_60%_60%] from-white/70 via-white/70 to-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))">
            <path fill="oklch(49.1% 0.27 292.581)" d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z" />
          </svg>
        </GlassLayer>
        <div class="text-left">
          <h1 class="text-3xl text-white">Choose a language.</h1>
          <h1 class="text-2xl text-white">Wählen Sie eine Sprache.</h1>
          <h1 class="text-2xl text-white">Choisissez une langue.</h1>
          <h1 class="text-2xl text-white">Scegli una lingua.</h1>
        </div>
      </GlassLayer>
    </div>
    <div class="h-1/2 w-full flex flex-col justify-center items-center bg-purple-100">
      <div class="flex flex-col justify-center items-center gap-2 w-min">
        <TextButton other_classes="w-full" on_click="">
          <h1 class="text-2xl">English</h1>
        </TextButton>
        <TextButton other_classes="w-full" on_click="">
          <h1 class="text-2xl">Deutsch</h1>
        </TextButton>
        <TextButton other_classes="w-full" on_click="">
          <h1 class="text-2xl">Français</h1>
        </TextButton>
        <TextButton other_classes="w-full" on_click="">
          <h1 class="text-2xl">Italiano</h1>
        </TextButton>
      </div>
    </div>
  </div>
</template>
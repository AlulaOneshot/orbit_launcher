<script setup>
import GlassLayer from "../../lib/components/GlassLayer.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const handleContinue = () => {
  router.push("/initial_setup/language");
}
</script>

<template>
  <div class="w-screen h-screen"
    @click.once="handleContinue">
    <div class="h-1/2 w-full flex flex-col justify-center items-center bg-purple-100">
      <img src="/orbit-logo-glow.png" alt="" class="w-80"/>
    </div>
    <div class="h-1/2 w-full flex flex-col justify-center items-center bg-purple-100">
      <div class="flex flex-col justify-center items-center gap-2 w-min">
        <GlassLayer>
          <div class="text-left text-nowrap">
            <h1 class="text-2xl text-white">Press the A button or touch the screen to continue.</h1>
            <h1 class="text-xl text-white">Drücken Sie die A-Taste oder berühren Sie den Bildschirm, um fortzufahren.</h1>
            <h1 class="text-xl text-white">Appuyez sur le bouton A ou touchez l'écran pour continuer.</h1>
            <h1 class="text-xl text-white">Premi il pulsante A o tocca lo schermo per continuare.</h1>
          </div>
        </GlassLayer>
      </div>
    </div>
  </div>
</template>
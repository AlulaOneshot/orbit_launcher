<script lang="ts" setup>
const props = defineProps({
  bg_color: { type: String, default: "bg-radial-[at_75%_85%] from-purple-900/70 via-purple-900/70 to-purple-500/20" },
  text_color: { type: String, default: "text-white" },

  border_radius: { type: String, default: "rounded-lg" },

  x_padding: { type: String, default: "px-3" },
  y_padding: { type: String, default: "py-2" },

  transition_time: { type: String, default: "duration-80" },

  outline_color: { type: String, default: "outline-transparent" },

  other_classes: { type: String, default: "" }
});

const classes = [
  props.bg_color,
  "backdrop-blur-[2px]",
  props.text_color,
  props.border_radius,
  props.x_padding,
  props.y_padding,
  "transition-all",
  props.transition_time,
  props.outline_color,
  "shadow-xl",
  "ease-in-out",
  "border",
  "border-white/20",
  "border-1",
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  props.other_classes,
];
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
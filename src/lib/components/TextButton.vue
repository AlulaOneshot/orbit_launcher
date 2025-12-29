<script lang="ts" setup>
 const props = defineProps({
    bg_color: { type: String, default: "bg-radial-[at_75%_85%] from-purple-900/70 via-purple-900/70 to-purple-500/20" },
    bg_focus_color: { type: String, default: "" },
    bg_active_color: { type: String, default: "active:from-purple-600/70 active:via-purple-600/70 active:to-purple-500/50" },
    text_color: { type: String, default: "text-white" },
    text_focus_color: { type: String, default: "focus:text-white" },
    text_active_color: { type: String, default: "active:text-white" },

    border_radius: { type: String, default: "rounded-lg" },

    x_padding: { type: String, default: "px-3" },
    y_padding: { type: String, default: "py-2" },

    transition_time: { type: String, default: "duration-80" },

    outline_color: { type: String, default: "outline-transparent" },
    outline_focus_color: { type: String, default: "focus:outline-teal-300" },
    outline_active_color: { type: String, default: "active:outline-transparent" },

    other_classes: { type: String, default: "" },
    on_click: { type: Function as PropType<() => void>, required: true }
  });

  const classes = [
      props.bg_color,
      props.bg_focus_color,
      props.bg_active_color,
      "backdrop-blur-[2px]",
      props.text_color,
      props.text_focus_color,
      props.text_active_color,
      props.border_radius,
      props.x_padding,
      props.y_padding,
      "transition-all",
      props.transition_time,
      props.outline_color,
      props.outline_focus_color,
      props.outline_active_color,
      "active:translate-y-1",
      "focus:scale-105",
      "active:scale-100",
      "shadow-xl",
      "focus:shadow-2xl",
      "active:shadow-md",
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
  <button :class="classes" v-on:click="props.on_click">
    <slot />
  </button>
</template>
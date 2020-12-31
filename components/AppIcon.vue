<template functional>
  <svg
    :style="{ width: props.size, height: props.size }"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="props.viewBox"
  >
    <path :d="props.icon" :fill="props.color" />
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      required: true,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: '24px',
    },
    color: {
      type: String,
      required: false,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 24 24',
    },
  },
}
</script>

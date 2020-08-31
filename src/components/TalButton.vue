<template>
  <div>
    <button :disabled="isDisabled">
      <slot></slot>
    </button>
    <button>2</button>
  </div>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

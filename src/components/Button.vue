<template>
  <button class="button" type="button" @click="$emit('click', $event)">
    <LoadingIcon class="loading" v-if="loading" />

    <template v-else>
      <slot name="icon-left" />

      <Typography variant="subtitle" color="inColor"><slot /></Typography>

      <slot name="icon-right" />
    </template>
  </button>
</template>

<script>
import Typography from "@/shared/components/Typography.vue";
import LoadingIcon from "@/assets/images/icons/loading-icon.svg";

export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: { Typography, LoadingIcon },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 4rem;

  background: var(--clr-primary);
  border: 0;
  border-radius: 0.5rem;
  color: var(--clr-text-in-color);
  cursor: pointer;

  transition: all 0.2s;

  .loading {
    width: 2.25rem;
    height: 2.25rem;

    animation-name: loading;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  &:hover {
    background: var(--clr-primary-light);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>

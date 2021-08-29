<template>
  <button
    class="button"
    :class="[size, variant]"
    type="button"
    @click="$emit('click', $event)"
  >
    <LoadingIcon class="loading" v-if="loading" />

    <template v-else>
      <slot name="icon-left" />

      <Typography :variant="small ? 'navigation' : 'subtitle'">
        <slot />
      </Typography>

      <slot name="icon-right" />
    </template>
  </button>
</template>

<script>
import { Typography } from "@/shared/components";

import { LoadingIcon } from "../assets/images";

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
    small: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    size() {
      return this.small ? "small" : "default";
    },
    variant() {
      return this.primary ? "primary" : "base";
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

  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  transition: all 0.2s;

  &.primary {
    background: var(--clr-primary);

    > * {
      color: var(--clr-text-in-color);
    }

    &:hover {
      background: var(--clr-primary-light);
    }
  }

  &.base {
    background: var(--clr-default);
    border: 1px solid var(--clr-complement);

    > * {
      color: var(--clr-text-default);
    }

    &:hover {
      border-color: var(--clr-primary-light);

      > * {
        color: var(--clr-primary);
      }
    }
  }

  &.default {
    width: 100%;
    height: 4rem;
    gap: 1rem;

    .loading {
      width: 2.25rem;
      height: 2.25rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &.small {
    padding: 0.75rem 2rem;
    gap: 0.5rem;

    .loading,
    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  .loading {
    animation-name: loading;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>

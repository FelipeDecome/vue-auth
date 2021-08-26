<template>
  <div
    class="input-container"
    :class="[{ focused, filled, hasErrors: !!error }]"
  >
    <Typography
      tag="input"
      variant="complement"
      ref="input"
      :type="type"
      :value="value"
      v-bind="$attrs"
    />
    <div v-if="error" class="error-container">
      <Warning />
      <Typography variant="complement" color="inColor">{{ error }}</Typography>
    </div>
  </div>
</template>

<script>
import Typography from "@/shared/components/Typography";
import Warning from "@/assets/images/icons/warning-icon.svg";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
    },
  },
  data() {
    return {
      focused: false,
      filled: false,
    };
  },
  components: {
    Typography,
    Warning,
  },
  mounted() {
    this.appendEvents();
  },
  beforeDestroy() {
    this.clearEvents();
  },
  methods: {
    /**
     * @param {FocusEvent} e
     */
    handleInputFocus() {
      this.focused = true;
    },

    /**
     * @param {FocusEvent} e
     */
    handleInputBlur(e) {
      this.focused = false;

      if (e.target.value) this.filled = true;
      else this.filled = false;
    },

    /**
     * @param {InputEvent} e
     */
    handleInput(e) {
      this.$emit("input", e.target.value);
    },

    appendEvents() {
      this.$refs.input.$el.addEventListener("focus", this.handleInputFocus);
      this.$refs.input.$el.addEventListener("blur", this.handleInputBlur);

      this.$refs.input.$el.addEventListener("input", this.handleInput);
      this.$refs.input.$el.addEventListener("keyup", (e) =>
        this.$emit("keyup", e)
      );
    },

    clearEvents() {
      this.$refs.input.$el.removeEventListener("focus", this.handleInputFocus);
      this.$refs.input.$el.removeEventListener("blur", this.handleInputBlur);

      this.$refs.input.$el.removeEventListener("input", this.handleInput);
      this.$refs.input.$el.removeEventListener("keyup", (e) =>
        this.$emit("keyup", e)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 100%;
  height: 3.75rem;
  padding: 0 1rem;

  background: var(--clr-default);
  border: 1px solid var(--clr-complement);
  border-radius: 0.5rem;
  transition: all 0.2s;

  &.filled {
    border-color: var(--clr-primary-lighter);

    input {
      color: var(--clr-primary-light);
    }
  }

  &.focused {
    border-color: var(--clr-primary-light);
    box-shadow: 0px 0px 4px 2px rgba(181, 100, 219, 0.25);

    input {
      color: var(--clr-primary-light);
    }
  }

  &.hasErrors {
    animation-name: shake;
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
    border-color: var(--clr-error-light);

    &.focused {
      box-shadow: 0px 0px 4px 2px rgba(251, 101, 128, 0.25);
    }

    input {
      color: var(--clr-error);

      &::placeholder {
        color: var(--clr-error);
      }
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--clr-text-default);
    transition: all 0.2s;

    &::placeholder {
      color: var(--clr-text-complement);
    }
  }

  .error-container {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    padding: 1rem;
    height: 100%;

    font-size: 0;

    color: var(--clr-error-light);
    cursor: help;
    transition: all 0.2s;

    &:hover {
      color: var(--clr-error);
      span {
        opacity: 1;
        transform: translateY(-1.6rem);
        pointer-events: all;
      }
    }

    span {
      pointer-events: none;
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.2s;

      padding: 0.375rem 1.5rem;

      background: var(--clr-error);
      border: 1px solid var(--clr-error-light);
      border-radius: 0.5rem;
      white-space: nowrap;

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 21px;

        height: 12px;
        width: 12px;
        transform: rotate(45deg);
      }

      &::before {
        bottom: -7px;
        background: var(--clr-error-light);
      }

      &::after {
        bottom: -5.5px;
        background: var(--clr-error);
      }
    }
  }
}
</style>

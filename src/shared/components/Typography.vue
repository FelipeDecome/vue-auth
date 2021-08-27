<template>
  <component
    :is="renderAs"
    v-bind="$attrs"
    class="text text-default"
    :class="[`text-${variant}`]"
    :style="inlineStyle"
  >
    <slot />
  </component>
</template>

<script>
const colors = {
  default: "--clr-text-default",
  title: "--clr-text-title",
  complement: "clr-text-complement",
  inColor: "--clr-text-in-color",
  primary: "--clr-primary",
  error: "--clr-error",
  warn: "--clr-warn",
  success: "--clr-success",
  info: "--clr-info",
};

const variantTags = {
  heading: "h1",
  title: "h2",
  subtitle: "h3",
  navigation: "p",
  paragraph: "p",
  complement: "span",
  span: "span",
};

export default {
  props: {
    tag: {
      type: String,
    },
    variant: {
      type: String,
      default: "paragraph",
    },
    color: {
      type: String,
    },
    align: {
      type: String,
    },
  },
  computed: {
    renderAs() {
      return this.tag || variantTags[this.variant];
    },
    inlineStyle() {
      return {
        color: this.color ? `var(${colors[this.color]})` : "",
        "text-align": this.align || "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  transition: all 0.2s;
}
</style>

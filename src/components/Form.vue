<template>
  <form>
    <div>
      <slot name="header" />
    </div>

    <div class="__content">
      <slot name="legend" />

      <slot />
    </div>

    <div>
      <slot name="footer" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  gap: 3.5rem;
  width: 22.5rem;

  &,
  .__content {
    flex-direction: column;
  }

  .__content {
    display: flex;
    gap: 1.5rem;
  }
}
</style>

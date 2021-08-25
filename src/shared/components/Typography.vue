<template>
    <dinamic-tag :tag="tag" class="default" :class="[variant]">
        <v-slot />
    </dinamic-tag>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'p',
        },
        variant: {
            type: String,
            default: 'paragraph'
        },
    }
}
</script>

<style lang="scss" scoped>
.default {
    font-family: Noto Sans TC, sans-serif;
}

.heading {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
    color: var(--clr-text-title);
}

.title {
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: var(--clr-text-title);
}

.subtitle {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--clr-text-title);
}

.paragraph {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.02em;
    color: var(--clr-text-default);
}

.complement {
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.04em;
    color: var(--clr-text-complement);
}
</style>
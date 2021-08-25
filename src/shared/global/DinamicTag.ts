import Vue from 'vue';

Vue.component('dinamic-tag', {
    name: "dinamic-tag",
    props: {
        tag: {
            type: String,
            required: true,
        }
    },
    render(createElement) {
        return createElement(this.tag, this.$slots.default)
    },
})
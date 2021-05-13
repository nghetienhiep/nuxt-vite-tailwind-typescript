<template>
    <div>
        <Nuxt />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Layout',
        head() {
            return {
                bodyAttrs: {
                    class: this.$store.getters.theme,
                },
            };
        },
    });
</script>

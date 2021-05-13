<template>
    <div :class="[]">
        <slot />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'LayoutConfig',
    });
</script>

<style scoped></style>

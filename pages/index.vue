<template>
    <div class="home-page">
        {{ $t('home') }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'HomePage',
        mounted() {
            // console.log(this.theme);
        },
    });
</script>

<style scoped lang="scss">
    .home-page {
    }
</style>

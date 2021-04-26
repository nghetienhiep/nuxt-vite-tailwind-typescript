import { Plugin } from '@nuxt/types';

import createApi from '../api';

interface keyable {
    [key: string]: any;
}

declare module '@nuxt/types' {
    interface Context {
        $api: keyable;
    }

    interface NuxtAppOptions {
        $api: keyable;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $api: keyable;
    }
}

const myPlugin: Plugin = (ctx, inject) => {
    inject('api', createApi(ctx.$axios));
};

export default myPlugin;

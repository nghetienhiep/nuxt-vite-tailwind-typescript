import { Context } from '@nuxt/types';
import camelcaseKeys from 'camelcase-keys';

export default ({ $axios, isDev }: Context) => {
  $axios.onRequest((config) => {
    if (isDev) {
      console.log('Making request to ' + config.url);
      if (config.params) {
        console.log('params ' + config.params);
      }
    }

    config.transformResponse = (data) => {
      if (typeof data === 'string') {
        try {
          data = camelcaseKeys(JSON.parse(data), { deep: true });
        } catch (e) {
          /* Ignore */
        }
      }
      return data;
    };
  });
};

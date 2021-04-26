import { NuxtAxiosInstance } from '@nuxtjs/axios';
import posts from './posts';

export default ($axios: NuxtAxiosInstance) => ({
  posts: posts($axios),
});

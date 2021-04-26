import { NuxtAxiosInstance } from '@nuxtjs/axios';

interface ShowParams {
  id: number;
}

export default ($axios: NuxtAxiosInstance) => ({
  index() {
    return $axios.$get(`/api/v1/posts`);
  },
  show({ id }: ShowParams) {
    return $axios.$get(`/api/v1/posts/${id}`);
  },
});

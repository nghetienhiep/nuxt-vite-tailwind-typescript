import { IStoreIndex } from 'interfaces';

export const state = () => ({
    theme: 'dark',
});

export const getters = {
    theme: (state: IStoreIndex) => state.theme,
};

export const actions = {};

export const mutations = {};

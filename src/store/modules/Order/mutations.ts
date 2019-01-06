import { MutationTree } from 'vuex';
import { OrderState } from './types';

export const mutations = {
    set(state: OrderState, num: number) {
        state.xxx = num
    }
};



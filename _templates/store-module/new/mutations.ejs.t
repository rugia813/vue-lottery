---
to: src/store/modules/<%= name %>/mutations.ts
---
import { MutationTree } from 'vuex';
import { <%= name %>State } from './types';

export const mutations = {
    set(state: <%= name %>State, num: number) {
        state.xxx = num
    }
};



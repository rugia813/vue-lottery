import { MutationTree } from 'vuex';
import { TimerState } from './types';

export const mutations: MutationTree<TimerState> = {
    setRemainTime(state, ms : number) {
        state.remainTime = ms
    }
};
import { MutationTree } from 'vuex';
import { TimerState } from './types';

export const mutations = {
    setEndTime(state: TimerState, ms: number) {
        state.endTime = ms
    }
};
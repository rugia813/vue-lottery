import { GetterTree } from 'vuex';
import { TimerState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<TimerState, RootState> = {
    formatedTime(state): Date {
        const { remainTime } = state;
        const date = new Date(remainTime)
        return date
    }
};
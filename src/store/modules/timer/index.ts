import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TimerState } from './types';
import { RootState } from '@/store/types';

export const state: TimerState = {
    remainTime: 0
};

const namespaced: boolean = true;

export const timer: Module<TimerState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
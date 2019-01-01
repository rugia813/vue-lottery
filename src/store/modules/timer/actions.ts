import { ActionTree } from 'vuex';
import axios from 'axios';
import { TimerState } from './types';
import { RootState } from '@/store/types';
import api from '@/api'


export const actions: ActionTree<TimerState, RootState> = {
    async init({commit}) {
        const timer = await api.timer()
        const now = Date.now()
        commit('setRemainTime', timer.endTime - now)
    }
};
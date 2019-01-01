import { ActionTree, ActionContext } from 'vuex';
import axios from 'axios';
import { TimerState } from './types';
import { RootState } from '@/store/types';
import api from '@/api'
import { mutations } from "./mutations";
import { BareActionContext } from 'vuex-typex';

export const actions = {
    async init(context: BareActionContext<TimerState, RootState>): Promise<void> {
        const res = await api.timer()
        mutations.setEndTime(context.state, res.endTime)
    }
};
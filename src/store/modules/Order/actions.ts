import { OrderState } from './types';
import { RootState } from '@/store/types';
import api from '@/api'
import { mutations } from "./mutations";
import { BareActionContext } from 'vuex-typex';

export const actions = {
    async init(context: BareActionContext<OrderState, RootState>): Promise<void> {
        
    }
};



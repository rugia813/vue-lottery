---
to: src/store/modules/<%= name %>/actions.ts
---
import { <%= name %>State } from './types';
import { RootState } from '@/store/types';
import api from '@/api'
import { mutations } from "./mutations";
import { BareActionContext } from 'vuex-typex';

export const actions = {
    async init(context: BareActionContext<<%= name %>State, RootState>): Promise<void> {
        
    }
};



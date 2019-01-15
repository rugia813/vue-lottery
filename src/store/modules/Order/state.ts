import { OrderState } from './types';
import storeBuilder from "@/store/storeBuilder";

const initialState: OrderState = {
    orderList: [],
    selectedIdxes: [],
};

export const orderStore = storeBuilder.module<OrderState>('Order', initialState)
export const stateGetter = orderStore.state()
import { OrderState } from './types';
import storeBuilder from "@/store/storeBuilder";

const initialState: OrderState = {
    orderList: [],
    selectedIdxes: [],
    currentBetCount: 0,
    currentPrice: 0,
    currentLottery: null,
};

export const orderStore = storeBuilder.module<OrderState>('Order', initialState)
export const stateGetter = orderStore.state()
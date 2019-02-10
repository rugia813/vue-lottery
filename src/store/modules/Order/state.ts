import { OrderState } from './types';
import storeBuilder from "@/store/storeBuilder";
import LotteryFactory from '@/entities/lotteries/LotteryFactory';
import { SSC_5Star } from '@/entities/lotteries/Lottery';

const initialState: OrderState = {
    orderList: [],
    selectedIdxes: [],
    currentBetCount: 0,
    currentPrice: 0,
    currentLottery: new SSC_5Star(),
};

export const orderStore = storeBuilder.module<OrderState>('Order', initialState)
export const stateGetter = orderStore.state()
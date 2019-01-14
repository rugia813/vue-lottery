export interface OrderState {
    orderList: Order[],
    selectedIdxes: any[],
}

export interface Order {
    betString: string,
    multiplier: number,
    betCount: number,
    basePrice: number,
}

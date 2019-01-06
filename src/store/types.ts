import { TimerState } from "@/store/modules/timer/types";
import { OrderState } from "@/store/modules/Order/types";

export interface RootState {
    Order: OrderState,
    Timer: TimerState
}
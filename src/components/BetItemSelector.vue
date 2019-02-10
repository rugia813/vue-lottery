<template>
    <div>
        <div v-for="(line, i) in betItems" :key="i">
            <span v-for="(item, o) in line.content" :key="o">
                <BetItemButton 
                    :betItem="item" 
                    :isSelected="selectedIdxes[i][o]" 
                    @select="select(i, o)"
                />
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import BetItemButton from "./BetItemButton.vue";
import { Order } from "@/store";
import { betItemRow, Lottery } from '@/entities/lotteries/Lottery';

@Component({
    components: {
        BetItemButton
    }
})
export default class BetItemSelector extends Vue {
    get selectedIdxes() {
        return Order.state.selectedIdxes
    }

    created() {
        this.betItems.forEach((line, i) => {
            this.selectedIdxes[i] = new Array(line.content.length).fill(false)
        })
        Order.actions.setSelectedIdxes(this.selectedIdxes)
    }

    select(x:number, y:number) {
        Order.actions.selectItem({x, y})
    }

    get betItems(): betItemRow[] {
        const lottery: Lottery = Order.state.currentLottery
        return lottery.betItems
    }
}
</script>

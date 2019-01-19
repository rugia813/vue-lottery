<template>
    <div>
        <div v-for="(line, i) in betItems" :key="i">
            <span v-for="(item, o) in line" :key="o">
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

@Component({
    components: {
        BetItemButton
    }
})
export default class BetItemSelector extends Vue {
    betItems = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ['aaa', 'bbb', 'ccc'],
    ]

    get selectedIdxes() {
        return Order.state.selectedIdxes
    }

    created() {
        this.betItems.forEach((line, i) => {
            this.selectedIdxes[i] = new Array(line.length).fill(false)
        })
        Order.actions.setSelectedIdxes(this.selectedIdxes)
    }

    select(x:number, y:number) {
        Order.actions.selectItem({x, y})
    }
}
</script>

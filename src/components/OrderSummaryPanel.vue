<template>
    <div>
        <span> {{betCount}} bet </span>
        <span> {{price}} dollar </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Order } from '@/store';

@Component
export default class OrderSummaryPanel extends Vue {
    get betCount() {
        return Order.state.currentBetCount
    }
    get price() {
        return Order.state.currentPrice
    }
}
</script>

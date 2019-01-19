<template>
    <div>
        <button @click="clear">Clear</button>
        <button @click="submit">Submit</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Order } from '@/store';

@Component
export default class OrderSubmitPanel extends Vue {
    clear() {
        Order.actions.clearSelection()
    }

    submit() {
        
    }
}
</script>

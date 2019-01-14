<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Timer @done="announce" />
    <BetItemSelector />
    <OrderSummaryPanel />
    <OrderSubmitPanel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timer from '@/components/Timer.vue';
import Order from "@/store/modules/Order";
import BetItemSelector from "@/components/BetItemSelector.vue";
import OrderSubmitPanel from "@/components/OrderSubmitPanel.vue";
import OrderSummaryPanel from "@/components/OrderSummaryPanel.vue";

@Component({
  components: {
    Timer,
    BetItemSelector,
    OrderSubmitPanel,
    OrderSummaryPanel,
  },
})
export default class Home extends Vue {
  announce() {
    console.log('new issue!')
    console.log(Order.selectedItems)
  }
}
</script>

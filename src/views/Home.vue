<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Timer @done="announce" />
    <BetItemSelector />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timer from '@/components/Timer.vue';
import BetItemSelector from "@/components/BetItemSelector.vue";

@Component({
  components: {
    Timer,
    BetItemSelector,
  },
})
export default class Home extends Vue {
  announce() {
    console.log('new issue!')
  }
}
</script>

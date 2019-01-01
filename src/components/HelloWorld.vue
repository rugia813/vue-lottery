<template>
  <div class="hello">
    <h1>{{ remainTime }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { TimerState } from '@/store/modules/timer/types';
const namespace: string = 'timer';
@Component
export default class HelloWorld extends Vue {
    @State('timer') timer!: TimerState;
    @Action('init', { namespace }) init: any;
    @Getter('formatedTime', { namespace }) formatedTime!: Date;

    elapsedTIme = 0;
    intervalId = 0

    mounted() {
        this.init();
        this.intervalId = setInterval(this.tick, 1000)
    }

    tick() {
      this.elapsedTIme++
    }

    get remainTime() {
        return this.timer && this.timer.remainTime - this.elapsedTIme * 1000;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

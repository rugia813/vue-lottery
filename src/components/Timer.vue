<template>
  <div class="hello">
    <h1>{{padTo2(hh)}}:{{padTo2(mm)}}:{{padTo2(ss)}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { TimerState } from '@/store/modules/timer/types';
import Timer from "@/store/modules/timer";

@Component
export default class HelloWorld extends Vue {
    elapsedTIme: number = 0;
    intervalId: number = 0
    hh: number = 0
    mm: number = 0
    ss: number = 0

    async mounted() {
      await Timer.actions.init()
      this.setupTimer()
      this.intervalId = setInterval(this.tick, 1000)
    }

    setupTimer() {
      const remainSec = Math.floor(this.getRemainTime() / 1000)
      this.hh = Math.floor(remainSec / 3600)
      this.mm = Math.floor((remainSec % 3600) / 60)
      this.ss = Math.floor(remainSec % 3600 % 60)
    }

    tick() {
      if (this.ss < 0) {
        this.mm--
        this.ss = 59
        if (this.mm < 0) {
          this.hh--
          this.mm = 59
        }
      } else {
        this.ss--
      }
    }

    padTo2(num: number) : string{
      return num.toString().padStart(2, '0')
    }

    getRemainTime(): number {
      const startTime = Date.now()
      const endTime = Timer.state.endTime
      return endTime - startTime
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

<template>
    <span 
        @click="$emit('select')"
    >
        <button :class="{ red: isSelected }" >
            {{betItem}}
        </button>
    </span>
</template>

<style scoped>
.red {
    color: red
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

@Component
export default class BetItemButton extends Vue {
    @Prop({required: true}) betItem?: string|number
    @Prop() isSelected?: boolean
}
</script>


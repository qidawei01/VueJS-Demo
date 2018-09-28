<template>
<v-container fluid>
    <div class="about">
        <h1>This is an Test1 page</h1>
        <HelloWorld v-bind:msg="msg"></HelloWorld>
        <b-button @click="setvalues()">Button</b-button>
    </div>
</v-container>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class Test1 extends Vue {
    private msg = 'Welcome to Your Vue.js + TypeScript App';
    private setvalues() {
        this.msg = 'dddd';
    }
}
</script>

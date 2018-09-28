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
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Test1',
    components: {
        HelloWorld,
    },
    data: () => {
        return {
            msg: 'EEEE111',
        };
    },
    methods: {
        setvalues() {
            const that: any = this;
            that.msg = 'EEEE';
        },
    },
};
</script>

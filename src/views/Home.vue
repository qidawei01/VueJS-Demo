<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home</h1>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
};
</script>

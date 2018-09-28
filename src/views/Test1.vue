<template>
<v-container fluid>
    <div class="about">
        <h1>This is an Test1 page</h1>
        <HelloWorld></HelloWorld>
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
};
</script>

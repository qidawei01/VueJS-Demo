<template>
<div>
    <li>{{ title }}
        <button @click="$emit('remove')">Remove</button></li>
</div>
</template>

<script lang="ts">
export default {
    name: 'TodoItem',
    props: {
        title: String,
    },
};
</script>

<style scoped>

</style>

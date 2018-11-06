<template>
<div>
    <li>{{ title }}
        <b-btn @click="$emit('remove')">Remove</b-btn></li>
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

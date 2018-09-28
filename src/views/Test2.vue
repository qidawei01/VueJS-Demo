<template>
<v-container fluid>
    <div class="about">
        <h1>This is an Test2 page.{{testdata}}</h1>
    </div>
</v-container>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';

export default class Test2 extends Vue {
    private testdata = 'dddddd';
}
</script>

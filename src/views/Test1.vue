<template>
<v-container fluid>
    <div class="row">
        <b-input type="text" class="col-2" v-model="newtodo" placeholder="Enter your name"></b-input>
        <b-btn class="col-1 left" @click="addTodo">Add</b-btn>
    </div>

    <div class="about top">
        <div class="row top" v-for="(todo,index) in todos" :key="index" :title="todo.name">
            <div class="col-2"> {{todo.name}}</div>
            <b-btn @click="todos.splice(index,1)">Remove</b-btn>
        </div>
    </div>

    <ul>
        <li is="todo-item" class="top" v-for="(todo,index) in todos" :key="index" :title="todo.name" @remove="todos.splice(index,1)"></li>
    </ul>
</v-container>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';
export default {
    name: 'Test1',
    components: {
        TodoItem,
    },
    data() {
        return {
            newtodo: '',
            todos: [{
                    name: 'A',
                    age: '23',
                },
                {
                    name: 'B',
                    age: '23',
                },
                {
                    name: 'C',
                    age: '23',
                },
            ],
        };
    },
    methods: {
        addTodo() {
            if (this.newtodo !== '') {
                this.todos.push({
                    name: this.newtodo,
                    age: '',
                });
                this.newtodo = '';
            }
        },
    },
};
</script>

<style scoped>
.top {
    margin-top: 3px;
}

.left {
    margin-left: 20px;
}
</style>

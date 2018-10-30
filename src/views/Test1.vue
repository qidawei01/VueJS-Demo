<template>
<v-container fluid>
    <div class="row">
        <b-input type="text" class="col-3" v-model="newtodo"></b-input>
        <b-btn class="col-1 left" @click="addTodo">Add</b-btn>
    </div>

    <div class="about">
        <div class="top" v-for="(todo,index) in todos" :key="index" :title="todo.name" @remove="todos.splice(index,1)">
            {{todo.name}}
            <b-btn @click="todos.splice(index,1)">Remove</b-btn>
        </div>
    </div>
</v-container>
</template>

<script lang="ts">
import TodoItem from '@/compontents/TodoItem.vue';
export default {
    name: 'Test1',
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
        }
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                name: this.newtodo,
                age: ''
            });
            this.newtodo = '';
        },
    },
};
</script>

<style scoped>
.top {
    margin-top: 10px;
}

.left {
    margin-left: 20px;
}
</style>

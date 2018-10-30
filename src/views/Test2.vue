<template>
<v-container fluid>
    <div>
        <ul>
            <li class="example" v-for="item in list1" :key="item">{{item}}</li>
        </ul>
        <ul>
            <li class="example" v-for="item in list2" :key="item">{{item}}</li>
        </ul>
        <ol>
            <li class="example" v-for="item in list3" :key="item">{{item}}</li>
        </ol>
        <ol>
            <li class="example" v-for="item in list4" :key="item">{{item}}</li>
        </ol>
        <ol>
            <li class="example" v-for="item in list5" :key="item">{{item}}</li>
        </ol>
    </div>
</v-container>
</template>

<script lang="ts">
export default {
    name: 'Test2',
    data() {
        return {
            list1: [],
            list2: [],
            list3: [],
            list4: [],
            list5: [],
        };
    },
    created() {
        const me: any = this;
        // let i = 0;
        // setTimeout(out, 1000);

        // function out() {
        //     i++;
        //     console.log(i + new Date().toString());
        //     if (i < 10) {
        //         setTimeout(out, 1000);
        //     }
        // }
        me.composeList12();
        me.$nextTick(() => {
            // DOM 更新了
            console.log('finished test ' + new Date().toString(), document.querySelectorAll('.example').length);
        });
    },
    methods: {
        composeList12() {
            const me: any = this;
            const count = 10;
            for (let i = 0; i < count; i++) {
                me.$set(me.list1, i, 'I am a AAAAAAA' + i);
            }
            console.log('finished list1 ' + new Date().toString(), document.querySelectorAll('.example').length);
            for (let i = 0; i < count; i++) {
                me.$set(me.list2, i, 'I am a BBBBBBB' + i);
            }
            console.log('finished list2 ' + new Date().toString(), document.querySelectorAll('.example').length);
            me.$nextTick(() => {
                // DOM 更新了
                console.log('finished tick1&2 ' + new Date().toString(), document.querySelectorAll('.example').length);
            });
        },
    },
};
</script>

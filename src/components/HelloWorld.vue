<template>
    <div>
       <div class="row"> <h2>{{msg}}</h2> </div>
        <b-btn v-b-modal.modal1 >Launch demo modal</b-btn>
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">Hello {{msg}}!</p>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

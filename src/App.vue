<template>
<v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
        <v-list>
            <div value="true" v-for="(item, i) in items" :key="i">
                <v-list-tile v-bind:to="{ path : item.path }">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </div>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="miniVariant = !miniVariant" v-show="drawer">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
        <span>&copy; 2018</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            clipped: true,
            drawer: true,
            fixed: true,
            items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire',
                    path: '/',
                },
                {
                    icon: 'bubble_chart',
                    title: 'Inspire1',
                    path: '/Test1',
                },
                {
                    icon: 'bubble_chart',
                    title: 'Inspire2',
                    path: '/Test2',
                },
            ],
            miniVariant: false,
            right: false,
            rightDrawer: false,
            title: 'Vuejs-Demo',
        };
    },
};
</script>

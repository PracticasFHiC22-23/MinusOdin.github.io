<template>
    <navbar></navbar>
    <router-view ></router-view>
    <easyfit-footer class="footer"></easyfit-footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import EasyfitFooter from './components/EasyfitFooter.vue';

export default {
    data() {
        return {
            activePage: 0,
            ejercicio: [
                {
                    route: '/fitness/0',
                    title: 'Ejercicios Aerobicos',
                    content: "Text"
                },
                {
                    route: '/fitness/1',
                    title: 'Ejercicios de Flexibilidad',
                    content: "Text"
                },
                {
                    route: '/fitness/2',
                    title: 'Ejercicios de Resistencia',
                    content: "Text"
                }
            ]
        };
    },
    methods: {
        async getEjercicios() {
            let res = await fetch('ejercicios.json');
            let data = await res.json();

            return data
        }
    },
    components: {
        Navbar,
        EasyfitFooter       
    }
}
</script>

<style>
    .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #8a1e1e;
    }
</style>
import {createRouter, createWebHashHistory} from 'vue-router';
import Inicio from './components/Inicio.vue';
import Fitness from './components/Fitness.vue';
import Nutricion from './components/Nutricion.vue';
import Perfil from './components/Perfil.vue';
import EjerciciosViewer from './components/EjerciciosViewer.vue';
import NutricionViewer from './components/NutricionViewer.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            name: 'Inici',
            component: Inicio,
        },
        {
            path: '/fitness',
            name: 'Fitness',
            component: Fitness
        },
        {
            path: '/fitness/:index',
            name: 'Ejercicios',
            component: EjerciciosViewer
        },
        {
            path: '/nutricion',
            name: 'Nutricion',
            component: Nutricion,
        },
        {
            path: '/nutricion/:index',
            name: 'Macroalimentos',
            component: NutricionViewer
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: Perfil,
        }
    ]
});

export default router;
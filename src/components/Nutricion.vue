<template>
    <div class="container">
        <div class="row">
            <router-link class="col-lg-4" to="/nutricion/0">Proteines</router-link>
            <router-link class="col-lg-4" to="/nutricion/1">Carbohidratos</router-link>
            <router-link class="col-lg-4" to="/nutricion/2">Grasas</router-link>
            <router-link class="col-lg-4" to="/nutricion/3">Vitaminas</router-link>
            <router-link class="col-lg-4" to="/nutricion/4">Calculadora de dietas </router-link>
        </div>
    </div> 
</template>

<script>
export default {
    created() {
        console.log(this.$route.params.index);
    }
}
</script>
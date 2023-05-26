<template>
    <div class="container">
        <div class="row">
            <router-link class="col-lg-4" to="/fitness/0">Aerobicos</router-link>
            <router-link class="col-lg-4" to="/fitness/1">Flexiblilidad</router-link>
            <router-link class="col-lg-4" to="/fitness/2">Resistencia</router-link>
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
<template>
    <div class="container">
        <h1>Bienvenido a Easyfit</h1>
    </div> 
</template>

<script>
export default {
    created() {
        console.log(this.$route.params.index);
    }
}
</script>
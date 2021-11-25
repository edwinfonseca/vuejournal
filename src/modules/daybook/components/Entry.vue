<template>
    <div class="entry-container mb3 pointer p2" 
    @click="$router.push({name:'entry', params:{id:10} })">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold"> 24 </span>
            <span class="mx-1 fs-5">Noviembre</span>
            <span class="mx-2 fw-light">2021, miercoles</span>
        </div>
        <div class="entry-description">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final
        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}

.entry-description{
    font-size: 12px;
}
</style>
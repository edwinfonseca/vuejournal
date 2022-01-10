<template>
    <div class="d-flex justify-content-center">
        <h1 class="aling-self-center">
            no hay nada seleccionado
        </h1>
    </div>  
    <Fab @on:click="creatNuevaEntrada"/>
</template>

<script>
import {defineAsyncComponent} from 'vue' 
export default {
    name:'NoEntrySelected',
    components:{
    Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    },
    methods:{
        creatNuevaEntrada(){
            this.$router.push({name: 'entry', params:{id:'new'}})
        }
    }

}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>
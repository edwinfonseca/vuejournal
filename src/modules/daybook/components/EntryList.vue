<template>
    <div class="entry-list-container">
        <div class="px2 pt-2">
            <input type="text" 
            class="from-control" 
            placeholder="Buscar entradas"
            v-model="term">
        </div>
        <div class="mt-2 d-flex flex-colum">
            <button class="btn btn-primary mx-3" @click="$router.push({name: 'entry', params:{id:'new'}})">
                <i class="fa fa-plus-circle"></i>
                Nueva Entrada 
            </button>
        </div>
        <div class="entry-scrollarea">
            <Entry v-for="entry in entriesByTerm" 
            :key="entry.id" 
            :entry="entry"></Entry>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex' 
export default {
    components:{
        Entry: defineAsyncComponent(()=>import('./Entry.vue'))
    },
    computed:{
        ...mapGetters('journal',['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term)
        }
    },
    data(){
       return{
           term:''
       } 
    }

}
</script>

<style lang="scss" scoped>
.entry-list-containe{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}

.entry-scrollarea{
    height: calc(100vh - 110px);
    overflow: scroll;
}
</style>
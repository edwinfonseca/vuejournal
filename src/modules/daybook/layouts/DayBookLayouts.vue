<template>
    <NavBar/>
    <div
    v-if="isLoading"
     class="row justyfy-content-md-center">
        <div class="col-3 alert-info text-center mt-5" >
            Espere por favor...
            {{isLoading}}
            <h3 class="fa fa-spin fa-sync"></h3>
        </div>
    </div>
    <div
    v-else
    class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import {defineAsyncComponent} from 'vue' 
import {mapActions, mapState} from 'vuex'

export default {
    components:{
        NavBar: defineAsyncComponent(()=>import('../components/NavBar.vue') ),
        EntryList: defineAsyncComponent(()=>import('../components/EntryList.vue') )
    },
    computed:{
        ...mapState('journal',['isLoading']),
    },
    methods:{
        ...mapActions('journal',['loadEntries'])
    },
    created(){
        this.loadEntries()
    }
}
</script>
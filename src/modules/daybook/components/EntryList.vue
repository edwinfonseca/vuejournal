<template>
    <h1>EntryList!!!</h1>
    <div class="entry-list-container">
        <div class="px2 pt-2">
            <input type="text" class="from-control" placeholder="Buscar entradas">
        </div>
        <div class="entry-scrollarea">
            <Entry v-for="item in 100" :key="item" ></Entry>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Entry: defineAsyncComponent(()=>import('./Entry.vue'))
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
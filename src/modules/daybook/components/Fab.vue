<template>
    <button
    @click="$emit('on:click')"
     class="btn btn-pimary">
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props:{
        icon:{
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    background-color: darkcyan;
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}

</style>
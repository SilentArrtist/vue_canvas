
<template>
    <div class="">
        <elementsBlock
        />
    </div>
    
</template>



<script>

import elementsBlock from '@/components/elementsBlock.vue';
    export default {
        mounted(){
        this.$store.dispatch('getData');
        },
        components:{
            elementsBlock,
        },
        data(){
            return{
                mainKey:Math.random(),
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
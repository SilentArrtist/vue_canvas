
<template>
    <div class="">
        <elementsBlock
        :dataFromJSON="data"
        />
    </div>
    
</template>



<script>
import data from './data/inputData.json'
import elementsBlock from '@/components/elementsBlock.vue';
    export default {
        components:{
            elementsBlock,
        },
        data(){
            return{
                data
            }
        },
    }
</script>

<style scoped>

</style>
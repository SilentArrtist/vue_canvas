
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
        created(){
            this.randomaizer();
        },
        components:{
            elementsBlock,
        },
        data(){
            return{
                data,
                mainKey:Math.random(),
            }
        },
        methods:{
            randomaizer(){
                setInterval(() => {
                    let objArr =this.data.ObjectsArray;
                    for(let i = 0;i<objArr.length-1;i++){
                        objArr[i].parameters.ID += (Math.random()>0.5?1:(-1))
                        objArr[i].parameters.TTL += (Math.random()>0.5?1:(-1))
                        objArr[i].parameters.Capacity += (Math.random()>0.5?1:(-1))
                        objArr[i].parameters.Modbus_ID += (Math.random()>0.5?1:(-1))
                    }
                    this.mainKey = Math.random();
                }, 1000);
                
            }
        }
    }
</script>

<style scoped>

</style>
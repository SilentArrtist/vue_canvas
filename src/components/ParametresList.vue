<template>
    <div class="parametresList">
            <ParametersItem
            v-for="(parameter,index) in parametresArray" 
            :key='index+Math.random()*10'
            :param = 'parameter'
            @remove = "removeParam"
            />
    </div>
</template>

<script>
import ParametersItem from '@/components/ParametersItem.vue';
    export default {
        components:{
            ParametersItem,
        },
        props:{
           parametresArray:{
            type:Array,
            required:true,
           },
        },
        data(){
            return{

            }
        },
        methods:{
            removeParam(param){
                this.$emit('deleteElem',param)
            }
        }
    }
</script>

<style lang="scss" scoped>
.parametresList {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.parameterBlock{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 2px solid teal;
    background-color: rgb(21, 172, 172);
    margin-top: 10px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 20px;
}
</style>

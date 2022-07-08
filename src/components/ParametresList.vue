<template>
    <div class="parametresList">
            <ParametersItem
            v-for="(parameter) in parametresArray" 
            @dragstart="(e)=>{dragStartHandler(e,parameter)}"
            @dragleave="(e)=>{dragEndHandler(e)}"
            @dragend="(e)=>{dragEndHandler(e)}"
            @dragover="(e)=>{dragOverHandler(e)}"
            @drop="(e)=>{dropHandler(e,parameter)}"
            @load="(e)=>{console.log(e)}"
            :draggable="true"
            :key='parameter.ParamID'
            :param = 'parameter'
            :type = 'type'
            :remove = 'removeParam'
            />
    </div>
</template>

<script>
import ParametersItem from '@/components/ParametersItem.vue';
    export default {
        
        components:{
            ParametersItem,
        },
        props:['parametresArray','type','removeParam'],
        data(){
            return{
                currentParam:null,
                currType:this.type,
            }
        },
        methods:{
            dragStartHandler(e,parameter){
                this.currentParam = parameter;
            },
            dragEndHandler(e){
                e.target.style.border = "none";
            },
            dragOverHandler(e,parameter){
                e.preventDefault();
                e.target.style.border = "1px solid violet";

            },
            dropHandler(e,parameter){
                e.preventDefault();
                let i1,i2;
                for(let item in this.parametresArray){
                    if(this.parametresArray[item].ParamID === this.currentParam.ParamID)i1=item;
                    if(this.parametresArray[item].ParamID === parameter.ParamID)i2=item;
                }
                [this.parametresArray[i1],this.parametresArray[i2]]=[this.parametresArray[i2],this.parametresArray[i1]]
                e.target.style.border = "none";
            },
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

</style>

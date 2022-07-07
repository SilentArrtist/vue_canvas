<template>
    <div class="parametresList">
            <ParametersItem
            v-for="(parameter) in parametresArray" 
            @dragstart="(e)=>{dragStartHandler(e,parameter)}"
            @dragleave="(e)=>{dragEndHandler(e)}"
            @dragend="(e)=>{dragEndHandler(e)}"
            @dragover="(e)=>{dragOverHandler(e)}"
            @drop="(e)=>{dropHandler(e,parameter)}"
            :draggable="true"
            :key='parameter.ParamID'
            :param = 'parameter'
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
        props:['parametresArray','removeParam'],
        data(){
            return{
                currentParam:null,
            }
        },
        methods:{
            dragStartHandler(e,parameter){
                this.currentParam = parameter;
            },
            dragEndHandler(e){
                e.target.style.background = "#15acac";
            },
            dragOverHandler(e,parameter){
                e.preventDefault();
                e.target.style.background = "#126d6d";

            },
            dropHandler(e,parameter){
                e.preventDefault();
                let i1,i2;
                for(let item in this.parametresArray){
                    if(this.parametresArray[item].ParamID === this.currentParam.ParamID)i1=item;
                    if(this.parametresArray[item].ParamID === parameter.ParamID)i2=item;
                }
                [this.parametresArray[i1],this.parametresArray[i2]]=[this.parametresArray[i2],this.parametresArray[i1]]
                e.target.style.background = "#15acac";
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
.parameterBlock{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 2px solid teal;
    background-color: #15acac;
    margin-top: 10px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 20px;
}
</style>

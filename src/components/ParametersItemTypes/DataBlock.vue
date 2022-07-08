<template>
    <div>
        <p class="settingsTitle">Data Bar</p>
        <div>
            <span>Max Value:</span>
            <input v-model="dataMaxValue" type="text" name="" id="maxValue">
        </div>
        <div>
            <span id="ParamName" >{{param.ParamName}}:</span>
            <span :style="{ color: textColor }" id="ParamValue">{{param.ParamValue}}</span>
        </div>
        
    </div>
    <div class="btns">
        <div @click="toggleSettings" class="paramBtn">⚙</div>
        <div @click="remove(param)" class="paramBtn">✖</div>
    </div>
</template>

<script>
    
    export default {
        created() {
            this.param.ParamValue<=(parseInt(this.dataMaxValue))?this.textColor="black":this.textColor="red"
        },
        props:['param','remove','dataMaxValue','toggleSettings'],
        watch: {
            dataMaxValue(newValue){
                this.param.ParamValue<(parseInt(newValue))?this.textColor="black":this.textColor="red"
            },
        },
        data(){
            return{

            }
        },
        methods:{
        }
        
    }
</script>

<style lang="scss" scoped>
.btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.paramBtn{
    margin-left: 10px;
    cursor: pointer;
}
</style>
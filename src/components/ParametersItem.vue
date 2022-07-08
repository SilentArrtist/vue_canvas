<template>
    <div class="parameterBlock" :style="{ backgroundColor: bgColor }" >
        <div v-if = 'this.currType === "Data"&& !isSettingsOpen' class="dataBlock">
            <DataBlock
            :param = 'param'
            :remove = 'remove'
            :dataMaxValue = 'dataMaxValue'
            :toggleSettings = 'toggleSettings'
            />
        </div>
         <div v-if = 'this.currType === "Progress Bar" && !isSettingsOpen' class="dataBlock" >
            <ProgressBar
            :param = 'param'
            :remove = 'remove'
            :pbMaxValue = 'pbMaxValue'
            :pbCurrentValue = 'pbCurrentValue'
            :toggleSettings = 'toggleSettings'
            />
        </div>
        <div v-if = 'isSettingsOpen' class="dataBlock" >
            <div class="settingsElementsBlock">
                <p class="settingsTitle">Settings</p>
                <input type="color" v-model = 'bgColor' name="" id="">
            </div>
            <div class="btns">
                <div @click="toggleSettings" class="paramBtn">⚙</div>
                <div @click="remove(param)" class="paramBtn">✖</div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
    import DataBlock from './ParametersItemTypes/DataBlock.vue'
    import ProgressBar from './ParametersItemTypes/ProgressBar.vue'
    export default {
        components:{
            DataBlock,ProgressBar,
        },
        created() {
            this.currType = this.type
        },
         props:['param','type','remove'],
         data(){
            return{
                dataMaxValue:this.param.ParamValue,
                pbMaxValue:100,
                pbCurrentValue:'',
                isSettingsOpen:false,
                bgColor:'',
                textColor:'', 
                currType:'', 
            }
         },
         methods:{
            toggleSettings(){
                this.isSettingsOpen = !(this.isSettingsOpen);
            },
         }
    }
</script>

<style lang="scss" scoped>

.btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.parameterBlock{
    display: flex;
    width: 100%;
    border: 2px solid teal;
    background-color: #15acac;
    margin-top: 10px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 20px;
}
.dataBlock{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: left;
}
.paramBtn{
    margin-left: 10px;
    cursor: pointer;
}
</style>
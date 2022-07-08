<template>
    <div class="parameterBlock" :style="{ backgroundColor: bgColor }" >
        <div v-if = 'isDefaultWindow' class="dataBlock">
            <div class="btns">
                <div @click="toggleData" class="paramBtn">D</div>
                <div @click="toggleProgressBar" class="paramBtn">pB</div>
                <div @click="toggleSettings" class="paramBtn">⚙</div>
            </div>
                <div @click="remove(param)" class="paramBtn">✖</div>
        </div>
        <div v-if = 'isDataOpen' class="dataBlock">
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
                <div @click="toggleData" class="paramBtn">D</div>
            </div>
        </div>
         <div v-if = 'isProgressBarOpen' class="dataBlock" >
            <div class="settingsElementsBlock">
                <p class="settingsTitle">Progress Bar</p>
                <div>
                    <span>Max Value:</span>
                    <input v-model="pbMaxValue" type="text" name="" id="maxValue">
                </div>
                <div>
                    <span>Value:{{pbCurrentValue}}</span>
                </div>
            </div>
            <div @click="toggleProgressBar" class="paramBtn">PB</div>
        </div>
         <div v-if = 'isSettingsOpen' class="dataBlock" >
            <div class="settingsElementsBlock">
                <p class="settingsTitle">Settings</p>
                <input type="color" v-model = 'bgColor' name="" id="">
            </div>
            <div @click="toggleSettings" class="paramBtn">⚙</div>
        </div>
        
        
    </div>
</template>

<script>
    
    export default {
        created() {
            this.param.ParamValue<(parseInt(this.dataMaxValue))?this.textColor="black":this.textColor="red"
            let curVal = parseInt(this.param.ParamValue) / parseInt(this.pbMaxValue)
            this.pbCurrentValue ='';
            let counter = 0;
            for(let i =0;i<Math.floor(curVal*100);i++){
                this.pbCurrentValue+='-';
                counter++;
            }
            for(let i =counter;i<100;i++){
                this.pbCurrentValue+='|';
            }
        },
         props:['param','type','remove'],
         watch: {
            bgColor(newValue) {
            },
            dataMaxValue(newValue){
                this.param.ParamValue<(parseInt(newValue))?this.textColor="black":this.textColor="red"
            },
            pbMaxValue(newValue){
                const curVal = parseInt(this.param.ParamValue) / parseInt(newValue)
                this.pbCurrentValue ='';
                let counter = 0;
                for(let i =0;i<Math.floor(curVal*100);i++){
                    this.pbCurrentValue+='-';
                    counter++;
                }
                for(let i =counter;i<100;i++){
                    this.pbCurrentValue+='|';
                }
            }
        },
         data(){
            return{
                isDefaultWindow:true,
                //// Data block
                isDataOpen:false,
                dataMaxValue:5000,
                ////
                //// Progress bar block
                isProgressBarOpen:false,
                pbMaxValue:100,
                pbCurrentValue:'',
                ////
                isSettingsOpen:false,
                bgColor:'',
                textColor:'',














                
            }
         },
         methods:{
            toggleData(){
                this.isDefaultWindow = !(this.isDefaultWindow);
                this.isDataOpen = !(this.isDataOpen);
            },
            toggleProgressBar(){
                this.isDefaultWindow = !(this.isDefaultWindow);
                this.isProgressBarOpen = !(this.isProgressBarOpen);
            },
            toggleSettings(){
                this.isDefaultWindow = !(this.isDefaultWindow);
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
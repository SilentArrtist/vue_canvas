<template>
    <div class="parameterBlock" :style="{ backgroundColor: bgColor }" >
        <div v-if = '!isSettingsOpen' class="dataBlock">
            <div>
                <span id="ParamName" >{{param.ParamName}}:</span>
                <span :style="{ color: textColor }" id="ParamValue">{{param.ParamValue}}</span>
            </div>
            <div class="btns">
                <div @click="toggleSettings" class="paramBtn">⚙</div>
                <div @click="remove(param)" class="paramBtn">✖</div>
            </div>
        </div>
         <div v-if = 'isSettingsOpen' class="settingsBlock" >
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
            this.param.ParamValue<10?this.textColor="black":this.textColor="red"
        },
         props:['param','remove'],
         watch: {    // отслеживание свойства автоматически реагирует на любое его изменение
            bgColor(newValue) {
            }
        },
         data(){
            return{
                isSettingsOpen:false,
                bgColor:'',
                textColor:'',
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
}
.settingsBlock{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.paramBtn{
    margin-left: 10px;
    cursor: pointer;
}
</style>
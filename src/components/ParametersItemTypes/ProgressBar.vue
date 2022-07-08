<template>
    <div class="settingsElementsBlock">
        <p class="settingsTitle">Progress Bar</p>
        <div>
            <span>Max Value:</span>
            <input v-model="pbMaxValue" type="text" name="" id="maxValue">
        </div>
        <div>
            <span>Value:{{currentVal}}</span>
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
            this.currentVal = this.pbCurrentValue;
            const curVal = parseInt(this.param.ParamValue) / parseInt(this.pbMaxValue)
            this.currentVal ='';
            let counter = 0;
            for(let i =0;i<Math.floor(curVal*100);i++){
                this.currentVal+='-';
                counter++;
            }
            for(let i =counter;i<100;i++){
                this.currentVal+='|';
            }
        },
        props:['param','remove','pbMaxValue','pbCurrentValue','toggleSettings'],
        watch: {
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
                currentVal:'',
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
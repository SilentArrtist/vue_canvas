<template>
    <div class="settingsElementsBlock">
        <p class="settingsTitle">Progress Bar</p>
        <div>
            <span>Max Value:</span>
            <input v-model="pbMaxValue" type="text" name="" id="maxValue">
        </div>
        <div class="pbContainer">
            <div>Value:{{Value}}</div>
            <div class="loadingBar">
                <div class="percentage" :style="{'width':percentage+'%'}"></div>
            </div>
        </div>
    </div>
    <div class="btns">
        <div @click="toggleSettings" class="paramBtn">⚙</div>
        <div @click="remove(param)" class="paramBtn">✖</div>
    </div>
</template>

<script>
    
    export default {
        computed: {
            Value: function () {
                return this.persentage;
            }
        },
        created() {
            this.percentage = parseInt(this.param.ParamValue)/parseInt(this.pbMaxValue)*100
        },
        props:['param','remove','toggleSettings'],
        watch: {
            pbMaxValue(newValue){

                this.percentage = parseInt(this.param.ParamValue)/parseInt(newValue)*100
            }
        },
        data(){
            return{
                persentage:this.param.ParamValue,
                currentVal:'',
                pbMaxValue:100,
            }
        },
    }
</script>

<style lang="scss" scoped>
.loadingBar{
    position: relative;
    width: 400px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: .4), 
    0 -1px 1px #fff, 0 1px 0 #fff;
}
.percentage{
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #781192;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .35) 25%, transparent 25%,
      transparent 50%, rgba($color: #fff, $alpha: .35) 50%,
      rgba($color: #fff, $alpha: .35) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
}
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}
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
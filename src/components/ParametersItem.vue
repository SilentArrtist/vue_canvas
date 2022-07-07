<template>
    <div class="parameterBlock" >
        <p>{{param.ParamName}}:{{param.ParamValue}}</p>
        <div class="btns">
            <div @click="remove(param)" class="paramDeleteBtn">⚙</div>
            <div @click="remove(param)" class="paramDeleteBtn">✖</div>
        </div>
        
    </div>
</template>

<script>
    
    export default {
         props:['param','remove']
    }
</script>

<style lang="scss" scoped>

.btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.paramDeleteBtn{
    margin-left: 10px;
    cursor: pointer;
}
</style>
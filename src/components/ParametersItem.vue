<template>
    <div class="parameterBlock" >
        <p>{{param.ParamName}}:{{param.ParamValue}}</p>
        <div @click="$emit('remove',param)" class="paramDeleteBtn">✖</div>
    </div>
</template>

<script>
    
    export default {
         props:{
           param:{
            type:Object,
            required:true,
           },
        },
    }
</script>

<style lang="scss" scoped>
.paramDeleteBtn{
    margin-left: 10px;
    cursor: pointer;
}
</style>
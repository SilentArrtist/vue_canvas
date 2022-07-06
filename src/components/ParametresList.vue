<template>
    <div class="parametresList">
        <div 
        class="parameterBlock" 
        v-for="(parameter,index) in parametresArray" 
        :key='index+Math.random()*10'>
            <p>{{parameter}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props:{
           parametresArray:{
            type:Array,
            required:true,
           },
        },
    }
</script>

<style lang="scss" scoped>
.parametresList {
    color:red;
}

</style>

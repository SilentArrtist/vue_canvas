<template>
    <select :value ='modelValue' @change="updateValue" class="custom_selector">
            <option selected disabled>----</option>
            <option 
            class="selector_option"
            v-for="(item,index) in optionsArray" 
            :value="item"
            :key='index+Math.random()*10'>
            ->{{item}}
            </option>
    </select>
</template>

<script>
    export default {
        props:['className','optionsArray','modelValue'],
        methods:{
            updateValue(event){
                this.$emit("update:modelValue",event.target.value)
            }
        }
    }
</script>

<style scoped>
.custom_selector{
    border-radius: 7px;
    padding: 5px;
    
}
</style>
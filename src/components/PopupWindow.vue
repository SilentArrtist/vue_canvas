<template>
    <div id = 'pop_up' class="pop_up">
            <div class="pop_up_container">
                <div class="pop_up_body" id="pop_up_body">
                    <div class="newOption">
                        <MySelector
                        :className="'popupSelector'" 
                        :optionsArray = "optionsArray"
                        v-model = "value"
                        />
                        <MySelector
                        :className="'popupSelector'" 
                        :optionsArray = "typesArray"
                        v-model = "type"
                        />
                        <div class="btn" @click="addParam(value)">+</div>
                     </div>
                    <ParametresList
                        :parametresArray = 'parametresArray'
                        :removeParam='removeParam'
                        :type = 'type'
                    />
                    <div @click="closePopUp" id = 'pop_up_close' class="pop_up_close">✖</div>
                </div>
            </div>
        </div>
</template>

<script>
import ParametresList from '@/components/ParametresList.vue';
import MySelector from '@/components/UI/MySelector.vue';
import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters(['objects']),
        },
        components:{
            ParametresList,MySelector,
        },
        props:['optionsArray','parametres'],
        watch:{
            objects(newValue){
                console.log(this.objects);
                console.log(newValue);
            }
        },
        data(){
            return{
                parametresArray:[],
                typesArray:['Data','Progress Bar'],
                value:'',
                type:'',
            }
        },
        methods:{
            closePopUp(){
                this.$emit('close')
            },
            addParam(param){
                const index = this.objects.findIndex(item=>((item.type===this.parametres.type)&&(item.id===this.parametres.id)))
                const newObj = {
                    "ParamID":Math.random()*5,
                    "ParamName":param,
                    "ParamValue":this.objects[index].parameters[param],
                };
                vm.$set(this.parametresArray,this.parametresArray.length,newObj);
            },
            removeParam(param){
                this.parametresArray = this.parametresArray.filter(p=>p.ParamID!==param.ParamID)
            },
        },
    }
</script>

<style scoped>

.pop_up{
    /* display: none; */
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top:0;
    background-color: rgba(0,0,0,.8);
    z-index: 10;
}
.pop_up_container{
    display: flex;
    width: 100%;
    height: 100%;
}
.pop_up_body{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 800px;
    height: 60vh;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    padding: 100px 15px 110px 15px;
    position: relative;
}
.newOption{
    display: flex;
}
.pop_up_body_text{
    font-size: 28px;
    font-weight: 600;
    color: #22262d;
    margin-bottom: 40px;
}
.pop_up_close{
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 21px;
    cursor: pointer;
}
#popup_selector{
    margin-bottom: 15px;
}
.btn{
    margin-left: 10px;
    cursor: pointer;
    font-size: 31px;
    font-weight: bold;
}


</style>
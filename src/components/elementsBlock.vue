<template>
    <div class="container">

        <div class="selector_block">
            <MySelector 
            :className="'mainSelector'" 
            :optionsArray = "types"
            v-model = "selectValue"
            />
            <div class="btn" @click="addNewObject(selectValue)">+</div>
        </div>
        <div class="objects">
            <button class="obj_btn"
            @click="openPopUp(obj.type,obj.id)"
            v-for="obj in objects"
            :key ='obj.key'
            >
            {{obj.type}}№{{obj.id}}
            </button>
        </div>
        
    </div>
    <PopupWindow
        v-if = 'isPopupOpen'  
        @close = 'togglePopup'
        :optionsArray = 'parametersArray'
        :parametres = 'currentObject'
    >
    </PopupWindow>
</template>

<script>
import PopupWindow from '@/components/PopupWindow.vue';
import MySelector from '@/components/UI/MySelector.vue';
import { mapGetters,mapMutations } from 'vuex';
    export default {
    computed:mapGetters(['types','objects']),
    components:{
        PopupWindow,MySelector,
    },
    data(){
        return{
            currentObject:{type:'',id:''},
            isPopupOpen:false,
            selectValue:'',
            parametersArray: ['ID','TTL','Capacity','Modbus_ID'],
        }
    },
    methods:{
        ...mapMutations['addObject'],
        addNewObject(selectedValue){
            this.addObject({
                key:Math.random(),
                type:selectedValue,
                id:this.objects.length+1,
                parameters:{
                    "ID":Math.ceil(Math.random()*25),
                    "TTL":Math.ceil(Math.random()*14),
                    "Capacity":Math.ceil(Math.random()*100),
                    "Modbus_ID":Math.ceil(Math.random()*50)
                }
             })
              
        },
        openPopUp(type,id){
            this.currentObject.type = type;
            this.currentObject.id = id;
            this.togglePopup();
        },
        togglePopup(){
            this.isPopupOpen = !(this.isPopupOpen);
        }
    }
    }
</script>

<style scoped>
.container{
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 450px;
}
.selector_block{
    display: flex;
    padding: 5px;
    margin-bottom: 15px;
}
.obj_btn{
    padding: 7px;
    background: none;
    border: 1px solid rgb(88, 88, 88);
    border-radius: 7px;
    margin-left: 10px;
}
.btn{
    margin-left: 10px;
    cursor: pointer;
    font-size: 31px;
    font-weight: bold;
}
.objects{
    display: flex;
}
</style>
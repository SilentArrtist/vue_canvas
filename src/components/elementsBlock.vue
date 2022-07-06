<template>
    <div class="container">

        <div class="selector_block">
            <MySelector 
            :className="'mainSelector'" 
            :optionsArray = "objTypes"
            v-model = "selectValue"
            />
            <button @click="addNewObject(selectValue)">Add</button>
        </div>
        <div class="objects">
            <button
            @click="openPopUp(obj.type,obj.id)"
            v-for="obj in objArr"
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
    export default {
    props:{
        dataFromJSON:Object,
    },
    components:{
        PopupWindow,MySelector,
    },
    data(){
        return{
            currentObject:{},
            isPopupOpen:false,
            selectValue:'',
            objTypes:[...this.dataFromJSON.ObjectsTypesArr],
            objArr:[...this.dataFromJSON.ObjectsArray],
            parametersArray: ['ID','TTL','Capacity','Modbus_ID'],
        }
    },
    methods:{
        addNewObject(selectedValue){
            console.log(selectedValue);
            this.objArr.push({
                key:Math.random(),
                type:selectedValue,
                id:this.objArr.length+1,
                parameters:{
                    "ID":Math.ceil(Math.random()*25),
                    "TTL":Math.ceil(Math.random()*14),
                    "Capacity":Math.ceil(Math.random()*100),
                    "Modbus_ID":Math.ceil(Math.random()*50)
                }
            })
              
        },
        openPopUp(type,id){
            this.currentObject = this.objArr.filter(i=>((i.type==type)&&(i.id==id)))
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
    padding: 5px;
    border: 1px solid rgb(11, 143, 143);
}
.objects{
    display: flex;
}
</style>
import data from '../../data/inputData.json'
export default{
    
    actions:{
        getData(ctx){
            const DataObjectsTypesArr = data.ObjectsTypesArr;
            const DataObjectsArray = data.ObjectsArray;
            ctx.commit('updateObjectsTypesArr',DataObjectsTypesArr);
            ctx.commit('updateObjectsArray',DataObjectsArray);
        }
    },
    mutations:{
        updateObjectsTypesArr(state,arr){
            state.ObjectsTypesArr = arr;
        },
        updateObjectsArray(state,arr){
            state.ObjectsArray  = arr;
        },
        addObject(state,newObj){
            state.ObjectsArray.unshift(newObj);
        }
    },
    state:{
        ObjectsTypesArr:[],
        ObjectsArray:[],
    },
    getters:{
        types(state){
            return state.ObjectsTypesArr;
        },
        objects(state){
            return state.ObjectsArray;
        },  
    },
}
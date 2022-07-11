import data from '../../data/inputData.json'
export default{
    
    actions:{
        getData(ctx){
            const DataObjectsTypesArr = data.ObjectsTypesArr;
            const DataObjectsArray = data.ObjectsArray;
            ctx.commit('updateObjectsTypesArr',DataObjectsTypesArr);
            setInterval(() => {
                for(let item of DataObjectsArray){
                    item.parameters.Capacity += Math.random()>0.5?1:-1;
                    item.parameters.TTL += Math.random()>0.5?1:-1;
                }
                ctx.commit('updateObjectsArray',DataObjectsArray);
            }, 2000);
            
            
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
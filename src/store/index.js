import Vue from 'vue'
import Vuex from 'vuex'
import data from  './modules/data'


export const store = new Vuex.Store({
    modules:{
        data,
    }
})
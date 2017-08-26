/**
 * Created by tjh on 2017/8/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import userinfo from './modules/userinfo'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userinfo
    },
});
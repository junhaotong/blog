/**
 * Created by tjh on 2017/8/19.
 */
import cookie from 'js-cookie';
import * as types from '../mutation-types';
import axios from 'axios';

const state = {
    userinfo: cookie.getJSON('userinfo') || {}
}

const actions = {
    logout ({commit}) {
        return new Promise((resolve, reject) => {
            commit(types.LOG_OUT);
            resolve();
        })
    },
    update_userinfo ({commit}) {
        return new Promise((resolve, reject) => {
            commit(types.UPDATE_USERINFO);
            resolve();
        })
    }
}

const mutations = {
    [types.LOG_OUT] (state) {
        state.userinfo = {};
    },
    [types.UPDATE_USERINFO] (state) {
        state.userinfo = cookie.getJSON('userinfo') || {};
        axios.defaults.headers.common['Authorization'] = state.userinfo.token;
    }
}

export default {
    state,
    actions,
    mutations
}

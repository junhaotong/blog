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
    update_userinfo ({commit}, data) {
        return new Promise((resolve, reject) => {
            commit(types.UPDATE_USERINFO, data);
            resolve();
        })
    }
}

const mutations = {
    [types.LOG_OUT] (state) {
        state.userinfo = {};
    },
    [types.UPDATE_USERINFO] (state, data) {
        cookie.set('userinfo', JSON.stringify({id: data.id, username: data.username, token: data.token.token}));
        state.userinfo = cookie.getJSON('userinfo') || {};
        axios.defaults.headers.common['Authorization'] = state.userinfo.token;
    }
}

export default {
    state,
    actions,
    mutations
}

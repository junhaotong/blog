/**
 * Created by tjh on 2017/8/22.
 */
import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import Nprogress from 'nprogress';
import qs from 'qs';
import cookie from 'js-cookie';

Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';

let userinfo = cookie.getJSON('userinfo') || {};
if (userinfo.token) axios.defaults.headers.common['Authorization'] = userinfo.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.transformRequest = data => {
    // 对 data 进行任意转换处理
    Nprogress.start();
    return qs.stringify(data);
};

axios.defaults.transformResponse = data => {
    // 对 data 进行任意转换处理
    Nprogress.done();
    data = JSON.parse(data);
    if (data.code === 3000) {
        window.vm.$Message.error(data.msg);
        window.vm.$store.dispatch('logout');
        window.vm.$router.push('/login');
    }
    return data;
};

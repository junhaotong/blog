/**
 * Created by tjh on 2017/8/22.
 */
import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Nprogress from 'nprogress';

import qs from 'qs';

axios.defaults.baseURL = '/api';

axios.defaults.transformRequest = function (data) {
    // 对 data 进行任意转换处理
    Nprogress.start();
    return qs.stringify(data);
};

axios.defaults.transformResponse = function (data) {
    // 对 data 进行任意转换处理
    Nprogress.done();
    data = JSON.parse(data);
    return data;
};

Vue.use(VueAxios, axios);

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router'

// Nprogress
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import store from './store';

//import iview components
import {Row, Col} from 'iview/src/components/grid';
import Input from 'iview/src/components/input';
import Button from 'iview/src/components/button';
import Dropdown from 'iview/src/components/dropdown';
import Icon from 'iview/src/components/icon';
import BackTop from 'iview/src/components/back-top';
import Spin from 'iview/src/components/spin';
import Card from 'iview/src/components/card';
import Tag from 'iview/src/components/tag';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Dropdown.name, Dropdown);
Vue.component('DropdownMenu', Dropdown.Menu);
Vue.component('DropdownItem', Dropdown.Item);
Vue.component(Icon.name, Icon);
Vue.component('BackTop', BackTop);
Vue.component(Spin.name, Spin);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);

// import "iview/src/styles/custom.less";
// import "iview/src/styles/mixins/index.less";
// import "iview/src/styles/common/index.less";
// import "iview/src/styles/animation/index.less";

// import 'iview/src/styles/components/input.less';
// import 'iview/src/styles/components/button.less';
// import 'iview/src/styles/components/dropdown.less';
import 'iview/src/styles/index.less';
// @import "button";
// @import "affix";
// @import "back-top";
// @import "badge";
// @import "circle";
// @import "spin";
// @import "alert";
// @import "collapse";
// @import "card";
// @import "message";
// @import "notice";
// @import "radio";
// @import "checkbox";
// @import "switch";
// @import "input-number";
// @import "tag";
// @import "loading-bar";
// @import "progress";
// @import "timeline";
// @import "page";
// @import "steps";
// @import "modal";
// @import "select";
// @import "select-dropdown";
// @import "tooltip";
// @import "poptip";
// @import "input";
// @import "slider";
// @import "cascader";
// @import "transfer";
// @import "table";
// @import "dropdown";
// @import "tabs";
// @import "menu";
// @import "date-picker";
// @import "time-picker";
// @import "form";
// @import "carousel";
// @import "rate";
// @import "upload";
// @import "tree";
// @import "avatar";
// @import "color-picker";
// @import "auto-complete";
// import iView from 'iview';
// Vue.use(iView);

import 'normalize.css';

// import axios
import './util/axios';

Vue.config.devtools = true;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    Nprogress.start();
    let token = store.state.userinfo.userinfo.token;
    if (token && to.path === '/sign') {
        Nprogress.done();
        next('/');
    } else {
        next();
    }
});

router.afterEach(() => {
    Nprogress.done();
});

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

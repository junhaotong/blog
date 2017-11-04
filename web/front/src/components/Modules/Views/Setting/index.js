/**
 * Created by apple on 2017/10/5.
 */
// import Setting from './Setting.vue';
const Setting = resolve => require(['./Setting.vue'], resolve);
import Basic from './Basic';
import Account from './Account';

export default {
    Setting,
    Basic,
    Account
};

/**
 * Created by tjh on 2017/8/20.
 */
import Modules from '../../components/Modules';
import Components from '../../components';

export default [{
    path: '/user',
    name: '用户管理',
    icon: 'android-person',
    redirect: '/user/list',
    component: resolve => {
        resolve(Components.Content);
    },
    children: [{
        path: 'add',
        name: '添加用户',
        icon: 'plus-round',
        component: Modules.User.Add
    }, {
        path: 'list',
        name: '用户列表',
        icon: 'list',
        component: Modules.User.List
    }]
}]
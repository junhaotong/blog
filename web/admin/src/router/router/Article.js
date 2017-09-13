/**
 * Created by apple on 2017/9/12.
 */
import Modules from '../../components/Modules';
import Components from '../../components';

export default [{
    path: '/article',
    name: '文章管理',
    icon: 'ios-book',
    redirect: '/article/list',
    component: resolve => {
        resolve(Components.Content);
    },
    children: []
}]

/**
 * Created by apple on 2017/9/12.
 */
import Modules from '../../components/Modules';
import Components from '../../components';

export default [{
    path: '/category',
    name: '文章分类管理',
    icon: 'ios-pricetag',
    redirect: '/category/add',
    component: resolve => {
        resolve(Components.Content);
    },
    children: [{
        path: 'list',
        name: '分类列表',
        component: Modules.Category.List
    }, {
        path: 'add',
        name: '新增分类',
        component: Modules.Category.Add
    }, {
        path: 'show',
        name: '分类详情',
        hidden: true,
        component: Modules.Category.Show
    }]
}]
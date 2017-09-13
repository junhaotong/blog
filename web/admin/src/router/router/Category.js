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
        path: 'add',
        name: '新增文章分类',
        component: Modules.Category.Add
    }]
}]
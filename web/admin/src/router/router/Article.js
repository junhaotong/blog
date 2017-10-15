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
    children: [{
        path: 'list',
        name: '文章列表',
        component: Modules.Article.List
    }, {
        path: 'show/:id',
        name: '文章详情',
        hidden: true,
        component: Modules.Article.Show
    }]
}]

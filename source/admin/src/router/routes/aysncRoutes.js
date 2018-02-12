import Layout from '@/views/Layout'

const _import_ = file => () => import('@/views/' + file + '.vue')
/**
 * 权限路由表, 判断依据了获取到的权限;
 */
export const aysncRoutesMap = [
  {
    path: '/demo',
    component: Layout,
    meta: { title: 'Demo', icon: '', role: ['user'] },
    children: [
      {
        path: 'demo-list',
        name: 'demoList',
        component: _import_('DemoList/index'),
        meta: { title: 'demoList', icon: '', noCache: true }
      },
      {
        path: 'demo-chart',
        name: 'demoChart',
        component: _import_('DemoChart/index'),
        meta: { title: 'demoChart', icon: '', noCache: false }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    meta: { role: ['admin'] },
    children: [
      {
        path: 'user-list',
        name: 'userList',
        component: _import_('Manage/UserList/index'),
        meta: { title: 'userList', icon: '' }
      }
    ]
  }
]

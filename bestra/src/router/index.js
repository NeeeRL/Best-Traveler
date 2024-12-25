import { createRouter, createWebHistory } from 'vue-router'
import lineData from '../data/lines.json'
import stopData from '../data/stops.json'
import TopView from '../views/TopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopView,
    },
    {
      path: '/stops',
      name: 'stops',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ichihiraStops.vue'),
	},
	{
		path: '/ichihira',
		children: [
			{
			path: 'top',
			name: 'ichihiraTop',
			component: () => import('../views/ichihiraStops.vue'),
			},
			{
			path: 'IchinosekiEkimae',
			name: 'IchinosekiEkimae',
			component: () => import('../views/stops/IchinosekiEkimae.vue'),
			},
		],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // savedPositionがある場合（ブラウザの戻る/進む時）はそれを使う
    if (savedPosition) {
      return savedPosition;
    }
    // 通常のページ遷移時にはページトップへスクロール
    return { top: 0 };
  },
})

export default router

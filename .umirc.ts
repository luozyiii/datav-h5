import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/chart', component: '@/pages/chart/index' }, // 图表测试
  ],
  fastRefresh: {},
});

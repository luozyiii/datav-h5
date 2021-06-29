import { defineConfig } from 'umi';
import postcssPx2vw from 'postcss-px-to-viewport';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', title: '移动报表' },
    { path: '/chart', component: '@/pages/chart/index' }, // 图表测试
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [
    postcssPx2vw({
      viewportWidth: 750, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      viewportUnit: 'vw',
      minPixelValue: 1,
    }),
  ],
});

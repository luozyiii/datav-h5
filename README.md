# datav-h5
移动报表：基于umi3 + echart，使用hook或class组件形式编写，vw实现屏幕自适应。

### [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)

之所以用 vw 不用当前非常通用的 rem， 是因为 rem 方案有几个缺点：

- rem 不容易理解，字体单位却用来处理长度问题
- 需要 js 设置根元素 font-size，样式和行为耦合不是很好
- rem 设置的 css 长度，经过四合五入，存在最后 1 像素问题

```javascript
// 这里借助 postcss-px-to-viewport 帮我们自动转 px 为 vw ，先安装依赖：
yarn add postcss-px-to-viewport

// 然后在 umirc.js 中添加配置如下：
export default defineConfig({
  extraPostCSSPlugins: [
    postcssPx2vw({
      viewportWidth: 750,
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelValue: 1,
    }),
  ],
});

```

### 使用h5 标准模板
在pages目录新建 document.ejs 并编写

### SalesMap 百度地图
```javascript
// pages/document.ejs 引入百度地图依赖
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=VjOuySLG4EZKrdw1l443Y5sUX815AwXe"></script>
<script src="https://mapv.baidu.com/gl/examples/static/common.js"></script>
<script type="text/javascript" src="https://mapv.baidu.com/build/mapv.js"></script>
<script src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.54/dist/mapvgl.min.js"></script>
<script src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.53/dist/mapvgl.threelayers.min.js"></script>

// SalesMap init() 绘制飞线动画
```
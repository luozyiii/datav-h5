import React, { useEffect } from 'react';

import './index.less';

export default function (props) {
  const init = () => {
    var map = initBMap();
    var data = initData();
    setData(data);

    // 初始化百度地图
    function initBMap() {
      var map = initMap({
        tilt: 0,
        center: [108.154518, 36.643346],
        zoom: 5,
        style: darkStyle,
      });
      return map;
    }

    function initData() {
      var randomCount = 500;
      var node_data = [
        {
          x: 108.154518,
          y: 36.643346,
        },
      ];
      var edge_data = [
        {
          source: 1,
          target: 0,
        },
      ];
      var cities = [
        '北京',
        '天津',
        '上海',
        '重庆',
        '石家庄',
        '太原',
        '呼和浩特',
        '哈尔滨',
        '长春',
        '沈阳',
        '济南',
        '南京',
        '合肥',
        '杭州',
        '南昌',
        '福州',
        '郑州',
        '武汉',
        '长沙',
        '广州',
        '南宁',
        '西安',
        '银川',
        '兰州',
        '西宁',
        '乌鲁木齐',
        '成都',
        '贵阳',
        '昆明',
        '拉萨',
        '海口',
      ];
      // 构造数据
      for (var i = 1; i < randomCount; i++) {
        var cityCenter = mapv.utilCityCenter.getCenterByCityName(
          cities[parseInt(Math.random() * cities.length)],
        );
        node_data.push({
          x: cityCenter.lng - 5 + Math.random() * 10,
          y: cityCenter.lat - 5 + Math.random() * 10,
        });
        edge_data.push({
          source: parseInt(i * Math.random()),
          target: 0,
        });
      }
      var fbundling = mapv
        .utilForceEdgeBundling()
        .nodes(node_data)
        .edges(edge_data);

      var results = fbundling();

      var data = [];
      var timeData = [];

      for (var i = 0; i < results.length; i++) {
        var line = results[i];
        var coordinates = [];
        for (var j = 0; j < line.length; j++) {
          coordinates.push([line[j].x, line[j].y]);
          timeData.push({
            geometry: {
              type: 'LineString',
              coordinates: [line[j].x, line[j].y],
            },
            count: 1,
            time: j,
          });
        }
        data.push({
          geometry: {
            type: 'LineString',
            coordinates: coordinates,
          },
        });
      }
      return {
        pointData: timeData,
        lineData: data,
      };
    }

    function setData({ pointData, lineData }) {
      // console.log(pointData);
      var view = new mapvgl.View({ map });
      var lineLayer = new mapvgl.LineLayer({
        color: 'rgba(55, 50, 250, 0.3)',
        blend: 'lighter',
      });
      view.addLayer(lineLayer);
      lineLayer.setData(lineData);

      var linePointLayer = new mapvgl.LinePointLayer({
        size: 8,
        speed: 20,
        color: 'rgba(255, 255, 0, 0.6)',
        animationType: mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH,
        shapeType: mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE,
        blend: 'lighter',
      });
      view.addLayer(linePointLayer);
      linePointLayer.setData(lineData);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="sales-map">
      <div className="sales-map-inner">
        <div id="map_container" />
      </div>
    </div>
  );
}

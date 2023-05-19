import { commonFace, lineFace, pieFace, radarFace, dataType } from './typing'

export function chartOptions(type: string, data: dataType[]) {
  const common: commonFace = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
  };

  const line: lineFace = {
    ...common,
    xAxis: {
      type: 'category',
      data: data.map(item => item.label),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.map(item => item.value),
        type: 'line'
      }
    ],
  };

  const bar: lineFace = {
    ...common,
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'bar'
      }
    ],
  };

  const pie: pieFace = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: []
      }
    ]
  };

  const radar: radarFace = {
    tooltip: {
      trigger: 'item'
    },
    indicator: [],
    series: [
      {
        type: 'radar',
        data: []
      }
    ]
  };

  const result = {
    line,
    bar,
    pie,
    radar,
  };

  return result[type];
}

interface valueFace {
  data: number[]
  type: string
}

export interface commonFace {
  grid?: {
    left?: string | number
    right?: string | number
    top?: string | number
    bottom?: string | number
    containLabel?: boolean
  }
  tooltip?: {
    trigger: string
  }
}

export interface lineFace extends commonFace {
  xAxis: {
    type: string
    data: string[]
  }
  yAxis: {
    type?: string
  }
  series: valueFace[]
}

interface pieSeries {
  type: string,
  radius: string
  data: number[]
}

export interface pieFace {
  tooltip: {
    trigger: string
  }
  series: pieSeries[]
}

interface radarData {
  value: number[]
  name?: string
}

interface radarSeries {
  data: radarData[]
  type: string
}

interface indicatorFace {
  name: string,
  max?: number
}

export interface radarFace {
  tooltip: {
    trigger: string
  }
  indicator: indicatorFace[]
  series: radarSeries[]
}

export interface dataType {
  label: string;
  value: number;
}
